<?php
header("Content-Type: text/plain; charset=utf-8");
header("Access-Control-Allow-Origin: https://suyazova.ru");
$ip = $_SERVER["REMOTE_ADDR"] ?? "unknown";
$rate_file = sys_get_temp_dir() . "/suyazova_rate_" . md5($ip);
if (file_exists($rate_file)) {
    $data = json_decode(file_get_contents($rate_file), true);
    if ($data && $data["count"] >= 3 && (time() - $data["first"]) < 60) { http_response_code(429); echo "rate_limited"; exit; }
}
if (!empty($_POST["website"] ?? "") || !empty($_POST["url"] ?? "")) { echo "success"; exit; }
$ua = $_SERVER["HTTP_USER_AGENT"] ?? "";
if (preg_match("/(semrushbot|ahrefsbot|mj12bot|dotbot|python|curl|wget|masscan)/i", $ua)) { echo "success"; exit; }
$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$city = trim($_POST["city"] ?? "");
$interest = trim($_POST["interest"] ?? "");
$message = trim($_POST["message"] ?? "");
if (empty($name) || empty($phone)) { http_response_code(400); echo "empty_fields"; exit; }
if (preg_match("/(http|www\\.|\\.ru|\\.com|\\.net)/i", $name . $phone . $city . $interest . $message)) { echo "success"; exit; }
$rate_data = file_exists($rate_file) ? json_decode(file_get_contents($rate_file), true) : null;
if ($rate_data && (time() - $rate_data["first"]) < 60) { $rate_data["count"]++; } else { $rate_data = ["first" => time(), "count" => 1]; }
file_put_contents($rate_file, json_encode($rate_data));
$envPath = __DIR__ . "/.env";
$env = [];
if (file_exists($envPath)) {
    foreach (file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (strpos($line, "=") !== false && strpos($line, "#") !== 0) {
            [$key, $value] = explode("=", $line, 2);
            $env[trim($key)] = trim($value);
        }
    }
}
$token = $env["TELEGRAM_BOT_TOKEN"] ?? "";
$chat_id = $env["TELEGRAM_CHAT_ID"] ?? "";
if (empty($token) || empty($chat_id)) { http_response_code(500); echo "config_error"; exit; }
$text = "<b>Новая заявка с сайта suyazova.ru</b>\n\n<b>Имя:</b> " . $name . "\n<b>Телефон:</b> " . $phone;
if ($city) $text .= "\n<b>Город:</b> " . $city;
if ($interest) $text .= "\n<b>Интересует:</b> " . $interest;
if ($message) $text .= "\n<b>Сообщение:</b> " . $message;
$text .= "\n\n<b>IP:</b> " . $ip;
file_get_contents("https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . urlencode($text) . "&parse_mode=HTML");
echo "success";
