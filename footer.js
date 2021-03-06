
var app = new Reef('#footer');

// Your template can be a string
var app = new Reef('#footer', {
	template: `<footer class="page-footer font-small blue pt-4">

	<!-- Footer Links -->
	<div class="container-fluid text-center text-md-left footer-container">
  
	  <!-- Grid row -->
	  <div class="row">
  
		<!-- Grid column -->
		
		<!-- Grid column -->
  
		<hr class="clearfix w-100 d-md-none pb-3">
  
		<!-- Grid column -->
		<div class="col-md-3 mb-md-0 mb-3">
  
		  <!-- Links -->
		  <!-- <h5 class="text-uppercase">Links</h5> -->
  
		  <ul class="list-unstyled footer-link">
			<li>
			  <a href="#!">Careers</a>
			</li>
			<li>
			  <a href="#!">Site map</a>
			</li>
			<li>
			  <a href="#!">Privacy</a>
			</li>
			<!-- <li>
			  <a href="#!">Link 4</a>
			</li> -->
		  </ul>
  
		</div>
		<!-- Grid column -->
  
		<!-- Grid column -->
		<div class="col-md-3 mb-md-0 mb-3">
  
		  <!-- Links -->
		  <!-- <h5 class="text-uppercase">Links</h5> -->
  
		  <ul class="list-unstyled footer-link">
			<li>
			  <a href="#!">Terms of Use</a>
			</li>
			<li>
			  <a href="#!">Contact us</a>
			</li>
			<li>
			  <a href="#!">Financing</a>
			</li>
			<!-- <li>
			  <a href="#!">Link 4</a>
			</li> -->
		  </ul>
  
		</div>
		<!-- Grid column -->
  
		<div class="col-md-6 mt-md-0 mt-3">
  
			<!-- Content -->
			<h5 class="text-uppercase">Need Help?</h5>
			<p>We're available 24/7 at 1-661-397-5511</p>
  
			<div class="container">
			<div class="row footer-icon">
			  <div class="col-lg-3 col-6 text-center mb-3">
				  <img src="images/home/cms.png" alt="">
			  </div>
  
			  <div class="col-lg-3 col-6 text-center mb-3">
				  <img src="images/home/cmas.png" alt="">
			  </div>
  
			  <div class="col-lg-3 col-6 text-center mb-3">
				  <img src="images/home/gsa.png" alt="">
			  </div>
  
			  <div class="col-lg-3 col-6 text-center mb-3">
				  <a href="https://www.bbb.org/us/ca/bakersfield/profile/burglar-alarm-systems/tel-tec-security-systems-inc-1066-80000799"><img src="images/home/bbb.png" alt=""></a>
			  </div>
		  </div>
		  </div>
  
  
	
		  </div>



	  </div>
	  <!-- Grid row -->
  
	</div>
	<!-- Footer Links -->
  
	<!-- Copyright -->
	<div class="footer-copyright text-center py-3">© 2020 Copyright: Tel-Tec Security Systems, Inc. All Rights Reserved
	  <!-- <a href="https://mdbootstrap.com/"> MDBootstrap.com</a> -->
	</div>
	<!-- Copyright -->
  
  </footer>
  <!-- Footer -->

	<!-- Footer End-->`
});

app.render();
