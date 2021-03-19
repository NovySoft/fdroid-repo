function setLang(lang) {
    $.ajax({
        cache: true,
        url: `content/${lang}.json`,
        dataType: "json",
        success: function(data) {
            $(".title").text(data.title);
            $(".dropLang").text(data.language);
            $(".instructions").html(data.instructions);
            $(".opt").text(data.opt);
            $(".optDesc").html(data.optDesc);
        }
    });
}