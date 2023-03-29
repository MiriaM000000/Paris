<?php
use function CommonMark\Render\HTML;
// Načítá pole z formuláře - name, email a message; odstraňuje bílé znaky; odstraňuje
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);
// Kontroluje data popř. přesměruje na chybovou adresu
if (empty($name) OR empty($message) OR !filter_var($email,
FILTER_VALIDATE_EMAIL)) {
header("Location: http://www.reboundace.cz/index.html?success=-1#form");
exit;
}
// Nastavte si email, nakterý chcete, aby se vyplněný formulář odeslal - jakýkoli váš email
$recipient = "miriam.balazsova@gmail.com";
// Nastavte předmět odeslaného emailu
$subject = "Máte nový kontakt od: $name";
// Obsah emailu, který se vám odešle
$email_content = "Jméno: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Zpráva:\n$message\n";
// Emailová hlavička
$email_headers = "From: $name <$email>";
90
// Odeslání emailu - dáme vše dohromady
.mail($recipient, $subject, $email_content, $email_headers);
// Přesměrování na stránku, pokud vše proběhlo v pořádku
header("Location:http://www.reboundace.cz/index.html?success=1#form");
?>