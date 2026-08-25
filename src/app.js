import { donationStore  } from "./modules/donationModulo.js";
//simulação de recup de dados de um API
const seed = [
    { donor: 'Instituto Horizonte', item: 'Cestas básicas', amount: 1250, status: 'Recebida', date: '2026-08-23' },
    { donor: 'Carlos Eduardo', item: 'Material escolar', amount: 480, status: 'Recebida', date: '2026-08-22' },
    { donor: 'Mercado Bom Vizinho', item: 'Alimentos diversos', amount: 890, status: 'Em conferência', date: '2026-08-20' },
    { donor: 'Ana Paula Martins', item: 'Roupas infantis', amount: 320, status: 'Recebida', date: '2026-08-19' }
  ];
  donationStore.initialize(seed)
  function render(){
    const donations= donationStore.get()
    const tbody = document.querySelector('#donations-table')
    tbody.innerHTML= donations.map(({donor,item,date,status,amount})=>`<tr>
    <td> ${donor}<\td>
    <td> ${item}<\td>
    <td> ${date}<\td>
    <span class = "badge-soft${status === 'Recebida'? 'green':'yellow'}"> <\span>
    

    <\tr>`).join('')

  }
  render()
  