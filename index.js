let data = []

function addBlog(){
    let projectName = document.getElementById('name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('message').value;
    let technologies = document.getElementsByClassName('checkbox');
    let image = document.getElementById('file');
    
    let images = URL.createObjectURL(image.files[0])
    
    
    let valuetechnologies = [];
    
    for (let i = 0; i < technologies.length; i++) {
        if(technologies[i].checked){
            valuetechnologies.push(technologies[i].value)
        }
    }

    displayBlog(projectName,description,images,valuetechnologies);
    
    let obj = {
        nameProject : projectName,
        dateStart : startDate,
        dateEnd : endDate,
        desc: description,
        tech: valuetechnologies,
        imagess: images
    }

    data.push(obj)
}
function displayBlog(nameProject,descProject,imageProject,techProject){
    let  hasil = [];

    for(let j = 0; j < techProject.length;j++){

        if(techProject[j].includes('Javascript')){
            hasil.push(`<i class="fa-brands fa-square-js"></i>`);

        }else if(techProject[j].includes('Css')){

            hasil.push(`<i class="fa-brands fa-css3-alt"></i>`);

        }else if(techProject[j].includes('React Js')){

            hasil.push(`<i class="fa-brands fa-react"></i>`);

        }else if(techProject[j].includes('golang')){
            hasil.push(`<i class="fa-brands fa-golang"></i>`);

        }
    }
    if(hasil.length == 0){
        alert('Technologies Kosong, Silahkan Masukan')
        return;
    }

    const display = document.getElementById('card-blog');
    
        display.innerHTML += `
        <div class="card">
            <div class="card-image">
                <img src="${imageProject}" alt="gambar project" width="100%">
            </div>
            <h3>${nameProject}</h3>
            <span>durasi: 3 bulan</span>
            <p>${descProject}</p>
            <div class="icon-tech" id='test'>
                ${hasil.join('')}
            </div>
            <div class="btn-edit-delete">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        `
}
const form = document.getElementById('button-send');
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        addBlog()
    })