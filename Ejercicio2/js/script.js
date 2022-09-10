class Book{
    book(){
        this.libro = "";
        this.titulo = "";
        this.nombre = "";
        this.apellido = "";
        this.category = "";
        this.precio = "";
        this.img = "";
    }
    setLibro(libro){
        this.libro = libro;
    }
    getlibro(){
        return this.libro;
    }
    settitulo(titulo){
        this.titulo = titulo;
    }
    gettitulo(){
        return this.titulo;
    }
    setnombre(nombre){
        this.nombre = nombre;
    }
    getlibro(){
        return this.autorname;
    }
    setapellido(apellido){
        this.apellido = apellido;
    }
    getapellido(){
        return this.apellido;
    }
    setcategoria(category){
        this.category = category;
    }
    getcategoria(){
        return this.category;
    }
    setprecio(precio){
        this.precio = precio;
    }
    getprecio(){
        return this.precio;
    }
    setimg(img){
        this.img = img;
    }
    getimg(){
        return this.img;
    }
    }
    
    function iniciar(){
        var showinfo = document.getElementById("Ingresar");
        if(showinfo.addEventListener){
            showinfo.attachEvent("onclick", function(){
                createObject(document.frmbook);
            });
        }
    }
    
    function createObject(form){
        const book = new Book();
        book.setLibro(form.nombre.value);
        book.settitulo(form.titulo.value);
        book.setnombre(form.autorname.value);
        book.setapellido(form.apellido.value);
        book.setcategoria(form.categoria.value);
        book.setprecio(form.precio.value);
        book.setimg(form.imagen.value);
        showProperities(book, "InfoBook")
    }
    
    const arrarObjetos =  new Array;
    
    function showProperties(objeto, objName){
        var infoBook = "";
        var 
        var info = document.getElementById('infolibro');//Espacio donde se pintaran los objetos
        for(var i in objeto){
        infoBook = infoBook + objName + "." + i + " = " + objeto[i] + "\n";
        }
        if(!confirm(infoBook + "\n\n¿Es esta información correcta?")){
        frmbook.nombre.value = "";
        frmbook.titulo.value = "";
        frmbook.autorname.value = "a";
        frmbook.apellido.value = "a";
        frmbook.categoria.value = "";
        frmbook.precio.value = "$";
        frmbook.imagen.value ="";
        }
    
        arrarObjetos.push(objeto);
    
        let id=1;