let nav = document.querySelector("nav");

    window.addEventListener("scroll",()=>{
      nav.classList.toggle("shadow",window.scrollY>0);
    })

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          console.log(entry.target);
          entry.target.classList.add("show");
        }else{
          entry.target.classList.remove("show");
        }
      })
    },{});

    const entries1 = document.querySelectorAll(".entry1");
    entries1.forEach(en=>observer.observe(en));

    const entries2 = document.querySelectorAll(".entry2");
    entries2.forEach(en=>observer.observe(en));

    const entries3 = document.querySelectorAll(".entry3");
    entries3.forEach(en=>observer.observe(en));

    const entries4 = document.querySelectorAll(".entry4");
    entries4.forEach(en=>observer.observe(en));

    const entries5 = document.querySelectorAll(".entry5");
    entries5.forEach(en=>observer.observe(en));