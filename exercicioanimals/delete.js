$(function () {
    $(document).on('click', '.deletaItem', function () {

        let relValue = this.getAttribute("rel");
        let item = {
            id: relValue
        };

        // adicionar o objeto do item no array de animais
        fetch("http://cafepradev.com.br:21020/animals/delete", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            // Converter o objeto em JSON
            body: JSON.stringify(item) 
        })
        .fetch(console.log())
    })

return false
});
