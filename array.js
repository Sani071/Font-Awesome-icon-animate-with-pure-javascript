function animate() {

    //animation 1

    let iconArea1 = document.querySelector('#iconarea1')
    iconArea1.innerHTML = '&#xf101'
   setTimeout(() => {
    iconArea1.innerHTML = '&#xf103' 
   }, 1000); 
   setTimeout(() => {
    iconArea1.innerHTML = '&#xf100' 
   }, 2000); 
   setTimeout(() => {
    iconArea1.innerHTML = '&#xf102' 
   }, 3000); 

   //animation 2

   let iconArea2 = document.querySelector('#iconarea2')
    iconArea2.innerHTML = '&#xf244'
   setTimeout(() => {
    iconArea2.innerHTML = '&#xf243' 
   }, 1000); 
   setTimeout(() => {
    iconArea2.innerHTML = '&#xf242' 
   }, 2000); 
   setTimeout(() => {
    iconArea2.innerHTML = '&#xf241' 
   }, 3000);
   setTimeout(() => {
    iconArea2.innerHTML = '&#xf240' 
   }, 3000);

   //animation 3

   let iconArea3 = document.querySelector('#iconarea3')
   iconArea3.innerHTML = '&#xf118';
  setTimeout(() => {
   iconArea3.innerHTML = '&#xf119' 
  }, 2000); 

  //animation 4

  let iconArea4 = document.querySelector('#iconarea4')
   iconArea4.innerHTML = '&#xf222';
  setTimeout(() => {
   iconArea4.innerHTML = '&#xf223' 
  }, 1000); 
  setTimeout(() => {
    iconArea4.innerHTML = '&#xf224' 
   }, 2000); 
   setTimeout(() => {
    iconArea4.innerHTML = '&#xf225' 
   },3000); 

   //animation 5

   let iconArea5 = document.querySelector('#iconarea5')
   iconArea5.innerHTML = '&#xf026';
  setTimeout(() => {
   iconArea5.innerHTML = '&#xf027' 
  }, 1000); 
  setTimeout(() => {
    iconArea5.innerHTML = '&#xf028' 
   }, 2000); 
 
}
setInterval(animate,4000)
animate();
