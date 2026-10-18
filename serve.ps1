# PowerShell HTTP Server for local development without Node or Python
$port = 8080
$path = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Magenta
    Write-Host "  ISURI NAVODYA — PORTFOLIO LOCAL SERVER RUNNING" -ForegroundColor Cyan
    Write-Host "==========================================================" -ForegroundColor Magenta
    Write-Host "  URL: http://localhost:$port/" -ForegroundColor Green
    Write-Host "  Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Magenta
    
    # Automatically open default browser
    Start-Process "http://localhost:$port/"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl.Split('?')[0]
        if ($rawUrl -eq '/' -or $rawUrl -eq '') {
            $rawUrl = '/index.html'
        }

        $filePath = Join-Path $path ($rawUrl.TrimStart('/'))
        
        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.svg'  { 'image/svg+xml' }
                '.png'  { 'image/png' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.ico'  { 'image/x-icon' }
                '.json' { 'application/json' }
                default { 'application/octet-stream' }
            }

            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }
        $response.Close()
    }
}
finally {
    $listener.Stop()
}
