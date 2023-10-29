$(function () {

    $(document).on('submit', '#carregarAnimais', function (event) {
        event.preventDefault();
        
        let id = $('#idAtu').val();
        let name = $('#nameAtu').val();
        let species = $('#speciesAtu').val();
        let color = $('#colorAtu').val();
        let size = $('#sizeAtu').val();


        let item = {
            id: id,
            name: name,
            species: species,
            color: color,
            size: size
        };
        console.log(item)

        fetch("http://cafepradev.com.br:21020/animals/update", {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify(item) 
        })
    });
    return false
});