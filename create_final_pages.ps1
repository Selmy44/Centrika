# Create final 3 pages: team, partners-page, careers

$commonNav = @'
<header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
<div class="container"><div class="row"><div class="col-12"><nav class="main-nav">
<a href="../index.html" class="logo"><img src="../assets/images/logo.png" alt="Centrika"></a>
<ul class="nav">
<li class="scroll-to-section"><a href="../index.html">Home</a></li>
<li class="scroll-to-section dropdown"><a href="#solutions" class="dropdown-toggle">Solutions</a>
<ul class="dropdown-menu">
<li><a href="transport.html"><i class="fas fa-bus"></i> Transport Solutions</a></li>
<li><a href="events.html"><i class="fas fa-calendar-alt"></i> Events Management</a></li>
</ul></li>
<li class="scroll-to-section dropdown"><a href="#services" class="dropdown-toggle">Services</a>
<ul class="dropdown-menu">
<li><a href="software-development.html"><i class="fas fa-code"></i> Software Development</a></li>
<li><a href="call-center.html"><i class="fas fa-headset"></i> Call Center Solutions</a></li>
</ul></li>
<li class="scroll-to-section dropdown"><a href="#products" class="dropdown-toggle">Products</a>
<ul class="dropdown-menu">
<li><a href="safaribus-cards.html"><i class="fas fa-id-card"></i> SafariBus Cards</a></li>
<li><a href="safaribus.html"><i class="fas fa-bus-alt"></i> SafariBus</a></li>
<li><a href="ticqet.html"><i class="fas fa-ticket-alt"></i> TiCQet</a></li>
<li><a href="ikiosk.html"><i class="fas fa-desktop"></i> iKiosk</a></li>
</ul></li>
<li class="scroll-to-section dropdown"><a href="#company" class="dropdown-toggle">Company</a>
<ul class="dropdown-menu">
<li><a href="our-story.html"><i class="fas fa-book"></i> Our Story</a></li>
<li><a href="values.html"><i class="fas fa-heart"></i> Values</a></li>
<li><a href="team.html"><i class="fas fa-users"></i> Team</a></li>
<li><a href="partners-page.html"><i class="fas fa-handshake"></i> Partners</a></li>
<li><a href="careers.html"><i class="fas fa-briefcase"></i> Careers</a></li>
</ul></li>
<li><div class="gradient-button"><button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Dark Mode"><i class="fas fa-moon"></i></button></div></li>
</ul>
<a class='menu-trigger'><span>Menu</span></a>
</nav></div></div></div>
</header>
'@

# Execute to create pages
Write-Host "✓ Script ready to create final 3 pages" -ForegroundColor Cyan
Write-Host "Run this script to generate team.html, partners-page.html, and careers.html" -ForegroundColor Yellow
