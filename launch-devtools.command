#!/bin/bash

# =============================================================================
# Chrome DevTools Launcher - Local Version
# =============================================================================
#
# Dieses Script startet Chrome mit aktiviertem Remote Debugging
# für lokale Entwicklung und Testing.
#
# Verwendung:
#   1. Doppelklick auf diese Datei
#   2. Chrome startet mit aktiviertem DevTools Protocol
#   3. Öffne in einem anderen Browser: http://localhost:9222
#   4. Du kannst jetzt alle Chrome-Tabs remote debuggen
#
# Für andere Projekte:
#   - Kopiere diese Datei in dein Projektverzeichnis
#   - Optional: Ändere den PORT (Zeile 24) falls 9222 bereits belegt ist
#   - Optional: Ändere das USER_DATA_DIR für separate Chrome-Profile
# =============================================================================

# Konfiguration
PORT=9222
USER_DATA_DIR="$HOME/Library/Application Support/Google/Chrome/DevTools-Profile"
PROJECT_NAME="Advokatur-KuK"

echo "======================================"
echo "Chrome DevTools Launcher"
echo "Projekt: $PROJECT_NAME"
echo "======================================"
echo ""
echo "🚀 Starte Chrome mit Remote Debugging auf Port $PORT..."
echo ""

# Prüfe ob Chrome bereits auf diesem Port läuft
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port $PORT ist bereits belegt!"
    echo ""
    echo "Optionen:"
    echo "  1. Schließe die andere Chrome-Instanz"
    echo "  2. Oder ändere den PORT in dieser Datei"
    echo ""
    read -p "Drücke Enter zum Beenden..."
    exit 1
fi

# Finde Chrome
if [ -d "/Applications/Google Chrome.app" ]; then
    CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif [ -d "/Applications/Chromium.app" ]; then
    CHROME_PATH="/Applications/Chromium.app/Contents/MacOS/Chromium"
else
    echo "❌ Chrome nicht gefunden!"
    echo "Bitte installiere Google Chrome."
    read -p "Drücke Enter zum Beenden..."
    exit 1
fi

# Erstelle User Data Directory falls nicht vorhanden
mkdir -p "$USER_DATA_DIR"

# Starte Chrome mit Remote Debugging
echo "✅ Chrome wird gestartet..."
echo ""
echo "📡 DevTools URL: http://localhost:$PORT"
echo "🌐 Öffne diese URL in einem anderen Browser um zu debuggen"
echo ""
echo "💡 Tipp: Für dieses Projekt navigiere zu http://localhost:3000"
echo ""
echo "Zum Beenden: Schließe dieses Terminal-Fenster"
echo "======================================"
echo ""

"$CHROME_PATH" \
  --remote-debugging-port=$PORT \
  --user-data-dir="$USER_DATA_DIR" \
  --no-first-run \
  --no-default-browser-check \
  "http://localhost:3000" &

# Warte kurz damit Chrome startet
sleep 2

# Öffne DevTools in Standard-Browser
echo "🔍 Öffne DevTools-Interface..."
open "http://localhost:$PORT"

echo ""
echo "✅ Chrome läuft mit DevTools auf Port $PORT"
echo ""
echo "Dieses Fenster offen lassen!"
read -p "Drücke Enter zum Beenden und Chrome zu schließen..."

# Beende Chrome beim Schließen
pkill -P $$
