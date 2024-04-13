export class Tarjetas{
    col='';
    nombre='';
    url='';

    constructor(c,n,u){
        this.col=c;
        this.nombre=n;
        this.url=u;

    }

    async mostrar(){
        const info = await getDetalle(this.url);
        const img = info[0];
        const id = info[1];
        let habilidades = '';
        const habis = info[2];
        const peso = info[5]/10;
        const altura = info[4]/10;
        let tipo = ' ';

        habis.forEach(hab => {
            habilidades += hab.ability.name+' ';
        });
        info[3].forEach(t => {
            tipo += t.type.name + ' ';
        });

        let card = '<div class="col-md-'+this.col+' mb-3">';
        card +='<div class="card bg-danger text-white">';
        card +='<img src="'+img+'" height="120" class="card-img-top p-2">';
        card +='<div class="card-body text-center">';
        card +='<h5 class="card-title text-capitalize">';
        card +='<span class="badge bg-warning text-dark">'+id+'</span>';
        card +=this.nombre+'</h5>';
        card +='<p class="card-text">Habilidades: <b>'+habilidades+'</b><br> Altura:<b>'+altura+'</b> <br> PESO: <b>'+peso+' </b><br> TIPO:<b>'+tipo+' </b></p>';
        card +='</div></div></div>';
        return card;
    }
}

const getDetalle = async(liga) =>{
    let detalles = [];
    const peticion = await fetch(liga);
    if(peticion.ok){
       const info = await peticion.json();
       detalles.push(info.sprites.other.dream_world.front_default);
       detalles.push(info.id);
       detalles.push(info.abilities);
       detalles.push(info.types);
       detalles.push(info.height);
       detalles.push(info.weight);
       detalles.push(info.type)

       return detalles;
    }
   }