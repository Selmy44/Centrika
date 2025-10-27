# PowerShell script to create all remaining pages efficiently

$baseDir = "C:\Users\Milly\Downloads\templatemo_570_chain_app_dev\pages"

# Template HTML header
$headerTemplate = @'
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="DESCRIPTION">
    <meta name="author" content="Centrika">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <title>TITLE - Centrika</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/templatemo-chain-app-dev.css">
    <link rel="stylesheet" href="../assets/css/animated.css">
    <link rel="stylesheet" href="../assets/css/owl.css">
    <link rel="stylesheet" href="../assets/css/navbar-custom.css">
    <link rel="stylesheet" href="../assets/css/dark-mode.css">
    <link rel="stylesheet" href="../assets/css/product-cards.css">
    <link rel="stylesheet" href="../assets/css/subpages.css">
</head>

<body>
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <a href="../index.html" class="logo">
                            <img src="../assets/images/logo.png" alt="Centrika">
                        </a>
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="../index.html">Home</a></li>
                            <li class="scroll-to-section dropdown">
                                <a href="#solutions" class="dropdown-toggle">Solutions</a>
                                <ul class="dropdown-menu">
                                    <li><a href="transport.html"><i class="fas fa-bus"></i> Transport Solutions</a></li>
                                    <li><a href="events.html"><i class="fas fa-calendar-alt"></i> Events Management</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section dropdown">
                                <a href="#services" class="dropdown-toggle">Services</a>
                                <ul class="dropdown-menu">
                                    <li><a href="software-development.html"><i class="fas fa-code"></i> Software Development</a></li>
                                    <li><a href="call-center.html"><i class="fas fa-headset"></i> Call Center Solutions</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section dropdown">
                                <a href="#products" class="dropdown-toggle">Products</a>
                                <ul class="dropdown-menu">
                                    <li><a href="safaribus-cards.html"><i class="fas fa-id-card"></i> SafariBus Cards</a></li>
                                    <li><a href="safaribus.html"><i class="fas fa-bus-alt"></i> SafariBus</a></li>
                                    <li><a href="ticqet.html"><i class="fas fa-ticket-alt"></i> TiCQet</a></li>
                                    <li><a href="ikiosk.html"><i class="fas fa-desktop"></i> iKiosk</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section dropdown">
                                <a href="#company" class="dropdown-toggle">Company</a>
                                <ul class="dropdown-menu">
                                    <li><a href="our-story.html"><i class="fas fa-book"></i> Our Story</a></li>
                                    <li><a href="values.html"><i class="fas fa-heart"></i> Values</a></li>
                                    <li><a href="team.html"><i class="fas fa-users"></i> Team</a></li>
                                    <li><a href="partners-page.html"><i class="fas fa-handshake"></i> Partners</a></li>
                                    <li><a href="careers.html"><i class="fas fa-briefcase"></i> Careers</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="gradient-button">
                                    <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Dark Mode">
                                        <i class="fas fa-moon"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div id="modal" class="header-text modal-img">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-title">PAGE_TITLE</h1>
                    <p class="page-subtitle">PAGE_SUBTITLE</p>
                </div>
            </div>
        </div>
    </div>

    <section class="section page-content" id="content">
        <div class="container">
CONTENT
        </div>
    </section>

    <footer id="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="section-heading">
                        <h4>Join our mailing list to receive updates</h4>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-3">
                    <form id="subscribe" action="" method="get">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6">
                                <fieldset>
                                    <input name="name" type="text" id="name" placeholder="Your Name" required="">
                                </fieldset>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <fieldset>
                                    <input name="email" type="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="">
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" class="main-button">
                                        <i class="fa fa-paper-plane"></i>
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p class="copyright">Copyright © 2024 Centrika. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/js/owl-carousel.js"></script>
    <script src="../assets/js/animation.js"></script>
    <script src="../assets/js/imagesloaded.js"></script>
    <script src="../assets/js/popup.js"></script>
    <script src="../assets/js/custom.js"></script>
    <script src="../assets/js/dark-mode.js"></script>
</body>
</html>
'@

Write-Host "✓ Template ready. Creating pages..." -ForegroundColor Green
Write-Host "All pages will be created manually in the next steps." -ForegroundColor Yellow
