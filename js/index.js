const zone = document.querySelector(".zone");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
   btn.addEventListener("click", (event) => {
      event.target.classList.toggle('_active')
   });


   btn.addEventListener("click", (event) => {

      const getOff = event.target.getAttribute('data-off')
      offAtt = `[data-unical="${getOff}"]`

      const billet = document.querySelector(".billet");
      const unics = document.querySelectorAll(offAtt);

      if (unics.length > 0) {
         unics.forEach((e) => {
            e.remove()
         })
      } else {
         const copy = billet.cloneNode(true);

         copy.setAttribute('data-unical', getOff)

         copy.classList.remove('_hidden');
         copy.innerHTML = getOff
         zone.appendChild(copy);
      }
   });

   btn.addEventListener("click", (event) => {
      const billets = document.querySelectorAll(".billet");

      billets.forEach((billet) => {
         billet.addEventListener('click', (event) => {
            event.target.remove()

            const getOff = event.target.getAttribute('data-unical')
            offAtt = `[data-off="${getOff}"]`
            const search = document.querySelector(offAtt)
            search.classList.remove('_active')

            const zoneCheck = document.querySelectorAll('.zone > .billet')
            const category = document.querySelector('.category')

            if (zoneCheck.length > 0) {
               console.log('есть');
               category.classList.add('_active')
            } else {
               console.log('нету');
               category.classList.remove('_active')
            }

         })
      })

      const zoneCheck = document.querySelectorAll('.zone > .billet')
      const category = document.querySelector('.category')

      if (zoneCheck.length > 0) {
         console.log('есть');
         category.classList.add('_active')

      } else {
         console.log('нету');
         category.classList.remove('_active')

      }
   });


})










































