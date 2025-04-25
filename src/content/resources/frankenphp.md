---
title: "FrankenPHP"
tags: ["web server"]
images: ["/images/b812f07d-17fa-4ccb-8ac8-baf1a6522dbd.webp"]
category: "php"
url: "https://frankenphp.dev/"
cost: ""
pricing: "free"
date: "2025-04-25T02:24:37.567Z"
excerpt: "The Modern PHP App Server, written in Go."
---


FrankenPHP is written in Go and C. It relies on Go’s iconic feature: goroutines!
Copy your PHP files in the document root, that’s all!

- Native support for HTTP/1.1, HTTP/2 and HTTP/3
- Automatic HTTPS certificates generation and renewal (Let’s Encrypt or ZeroSSL)
- Natively supported by Symfony, API Platform, Laravel…
- According to our benchmarks, 3.5x faster than FPM on API Platform apps.
- Automatically restart the worker each time your code change.