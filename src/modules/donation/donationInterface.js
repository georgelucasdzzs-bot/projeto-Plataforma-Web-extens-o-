const appendItems= (items)=>{
const content= document.querySelector('#donations-content');
const div= document.createElement('div');
div.classList.add('row','g-3',',mb-4')
 const childrens = items.map((x)=>
`<div class="col-md-6 col-xl-4">
        <article class="need-card">
          <div class="d-flex justify-content-between gap-2">
            <span class="badge-soft ${x.prioridade === "urgente" ? "red" : x.prioridade === "atenção" ? "yellow" : "green"}">${x.prioridade}</span>
            <small>${x.categoria}</small>
          </div>
          <h3>${x.nome}</h3>
          <p>Doadas: <strong>${x.doado}</strong> de ${x.quantidade} unidades.</p>
          <p>Faltam <strong>${x.quantidade - x.doado}</strong> unidades.</p>
          <button class="btn btn-sm btn-outline-primary find-button" data-id="${x.id}">Ver necessidade</button>
        </article>
      </div>`).join(``)
      div.innerHTML=children;
 content.appendChild(div)

}
export {appendItems}