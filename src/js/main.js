const textElement = document.querySelector(".parcel-container");

const getParcelDescription = (element, text) => {
    element.addEventListener("click", () => {
        textElement.innerHTML = text;
    });
};

getParcelDescription(document.querySelector("#maryam-1"), `
    <h2>Sirup Maryam KW</h2>
            
    <p>
        Ini sirup Maryam KW yang cocok untuk menemani hari lebaran Anda.
        Sesuai dengan namanya, sirup ini, ya <em>emang sirup KW</em>, tapi bukan
        KW sembarangan karena KW super dengan rasa mendekati sirup pada umumnya.
        Sangat cocok untuk teman Anda yang suka pamer pencapaian, pemberi
        status palsu, harapan palsu, dan spesies teman-teman sejenisnya yang
        memiliki gejala seperti demikian.
    </p>
`);

getParcelDescription(document.querySelector("#maryam-2"), `
    <h2>Sirup Maryam ORI</h2>
            
    <p>
        Ini sirup Maryam yang <em>ori</em>, yang <em>ori</em> yang ada badaknya (eh, salah iklan, wkwkwk...).
        Berbeda dengan sirup Maryam KW, sirup ini terbuat dari jeruk <em>ori</em>. Bisa dilihat dari bulir-bulir jeruknya,
        yang menggambarkan bulir-bulir dosamu selama hidup di dunia, wkwkwk...
    </p>
`);

getParcelDescription(document.querySelector("#khang-maman-1"), `
    <h2>Khang Maman Biscuit</h2>
            
    <p>
        Biskuit Khang Maman ini cocok untuk lebaran, terdiri dari kue-kue yang bervariasi, rupa-rupa bentuknya,
        aroma, serta rasanya seperti ingin <em>meninggoy</em>, wkwkwk...
    </p>
`);

getParcelDescription(document.querySelector("#khang-maman-2"), `
    <h2>Khang Maman Rengginang</h2>
            
    <p>
        Edisi baru dari Khang Maman, sekarang sudah tersedia versi rengginangnya dengan rasa rengginang yang begitu otentik.
        Dengan variasi warna yang beragam walaupun rasanya tetap sama, cocok untuk menemani lebaran sambil bergosip dengan tetangga, wkwkwk...
    </p>
`);

getParcelDescription(document.querySelector("#fanta"), `
    <h2>FANTAT</h2>
            
    <p>
        FANTAT, minuman berkarbonasi rasa stroberi, menjanjikan sensasi baru ketika meminumnya.
        Tidak hanya dari luar, namun juga dari dalam. Setiap tegukan FANTAT memberikan efek langsung
        bukan hanya dari mulut, tapi juga dari bagian akhir. Tidak percaya? Patut untuk dicoba.
    </p>
`);

getParcelDescription(document.querySelector("#monggo"), `
    <h2>Monggo</h2>
            
    <p>
        "Monggo, diambbil wafernya.", slogan yang sangat cocok untuk menemani hari-hari lebaran
        gabut Anda. Dengan setiap lapis wafer yang sama dengan lapisan beban hidup Anda, wafer ini cocok
        untuk menemani teman meratapi nasib, wkwkwk...
    </p>
`);