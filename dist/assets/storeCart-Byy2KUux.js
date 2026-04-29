import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css               */const e=document.getElementById("contenedor-carrito"),c=document.getElementById("total"),s=document.getElementById("vaciar-carrito"),i=localStorage.getItem("carrito"),n=i?JSON.parse(i):[];s.addEventListener("click",()=>{localStorage.removeItem("carrito"),location.reload()});const m=()=>{if(e.innerHTML="",n.length===0){e.innerHTML="<p>El carrito está vacío</p>",c.textContent="";return}let r=0;n.forEach(t=>{const o=document.createElement("div"),a=t.precio*t.cantidad;r+=a,o.innerHTML=`
    <h3>${t.nombre}</h3>
    <p>Precio: $${t.precio}</p>
    <p>Cantidad: ${t.cantidad}</p>
    <p>Subtotal: $${a}</p>
    <button class="eliminar">Eliminar</button>
    <hr>
`,o.querySelector(".eliminar")?.addEventListener("click",()=>{const l=n.filter(d=>d.id!==t.id);localStorage.setItem("carrito",JSON.stringify(l)),location.reload()}),e.appendChild(o)}),c.textContent="Total: $"+r};m();
