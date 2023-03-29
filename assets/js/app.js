
const storyData = {
    "title": "",
    "slides":
        [
            {
                "id": 1,
                "image": "assets/images/001.png",
                "text": "Había una vez un niño llamado Alex, que vivía en un pequeño pueblo rodeado de montañas y valles. Desde que era muy joven, Alex soñaba con explorar el mundo, ver lugares nuevos y descubrir cosas emocionantes. Pero el pueblo era muy pequeño y la gente allí rara vez salía de sus hogares, mucho menos viajaba alrededor del mundo.",
                "prev": 0,
                "next": 2,
            },
            {
                "id": 2,
                "image": "assets/images/002.png",
                "text": "Alex Pasaba horas leyendo libros de aventuras y estudiando mapas. Sabía de memoria los nombres de los países, las montañas más altas y los ríos más largos del mundo. Y siempre estaba ansioso por aprender más. A medida en que crecía, su curiosidad por el mundo también crecía. Estudió geografía y astronomía, y se dedicó a leer todo lo que pudiera encontrar sobre los lugares más lejanos y exóticos. Sabía que algún día tendría la oportunidad de explorar el mundo, y estaba decidido a estar preparado cuando llegara el momento.",
                "prev": 1,
                "next": 3,
            },
            {
                "id": 3,
                "image": "assets/images/003.png",
                "text": "Y llegó el momento. Alex se unió a una expedición en barco para explorar los océanos y descubrir nuevos lugares. Fue una aventura emocionante y peligrosa, llena de tormentas, mareas y criaturas extrañas del mar. Pero Alex estaba emocionado y ansioso por ver lo que había más allá del horizonte.",
                "prev": 2,
                "next": 4,
            },
            {
                "id": 4,
                "image": "assets/images/004.png",
                "text": "Durante su expedición, Alex conoció a una joven llamada Ana, que también era una exploradora intrépida. Ana compartía la misma pasión que Alex por la aventura y la exploración. Juntos, descubrieron nuevas tierras y aprendieron sobre culturas y costumbres diferentes. Finalmente, después de varios años de exploración y aventuras juntos, Alex y Ana decidieron casarse. Se establecieron en una pequeña casa en un pueblo costero, pero su pasión por la exploración nunca se desvaneció.",
                "prev": 3,
                "next": 5,
            },
            {
                "id": 5,
                "image": "assets/images/005.png",
                "text": "Alex y Ana tuvieron hijos, y criaron a sus hijos para ser exploradores también. Los llevaron a los lugares más lejanos y exóticos del mundo, enseñándoles sobre la belleza y la diversidad de la naturaleza. Alex sabía que el mundo era grande y que todavía había mucho por descubrir. Pero para él, lo más importante era el amor y la conexión que compartía con su familia. Juntos, seguirían explorando y descubriendo, siempre con la pasión y el entusiasmo de un niño aventurero.",
                "prev": 4,
                "next": 0,
            }
        ]
}

const storySlide = {
    "id": 0,
    "image": "",
    "text": 0,
    "prev": 0,
    "next": 0,
}


document.addEventListener('DOMContentLoaded', function() {


    $('.nav-prev').on('click', function ()
    {
        const currentSlide = getCurrentSlide();

        if (currentSlide.id !== 0 && currentSlide.prev !== 0)
        {
            displaySlide(getSlide(currentSlide.prev));
        }
        else
        {
            displayHome();
        }
    });

    $('.nav-next').on('click', function ()
    {
        const currentSlide = getCurrentSlide();

        console.log(currentSlide);
        if (currentSlide.id !== 0)
        {
            if (currentSlide.next !== 0)
            {
                displaySlide(getSlide(currentSlide.next));
            }
            else
            {
                displayEnd();
            }

        }
        else
        {
            displayHome();
        }
    });

    displayHome();

});


function displayHome()
{
    $('#ui').addClass('hidden');
    $('#end').addClass('hidden');

    $('#home').removeClass('hidden');
}


function displayEnd()
{
    $('#ui').addClass('hidden');
    $('#home').addClass('hidden');

    $('#end').removeClass('hidden');
}

function displaySlide(slide)
{

    if (slide.id === 0)
    {
        displayHome();
        return;
    }

    console.log(slide);

    $('#ui').attr('data-current', slide.id)

    $('#home').addClass('hidden');
    $('#end').addClass('hidden');
    $('#ui').removeClass('hidden');


    // LAST
    if (slide.next === 0)
    {
        $('.nav-prev').addClass('hidden');
        $('.nav-next').addClass('hidden');
        $('.nav-end').removeClass('hidden');
    }
    else
    {
        $('.nav-prev').removeClass('hidden');
        $('.nav-next').removeClass('hidden');
        $('.nav-end').addClass('hidden');
    }

    // image
    $('#story-image').attr('src', slide.image)

    // text
    $('#story-text').html(slide.text);


}

/**
 *
 * @returns {{id: number, image: string, text: number, prev: number, next: number }}
 */
function getCurrentSlide()
{
    return getSlide($('#ui').attr('data-current'));
}

/**
 *
 * @param id
 * @returns {{id: number, image: string, text: number, prev: number, next: number }}
 */
function getSlide(id)
{

    id = parseInt(id);

    storyData.slides.forEach(function(slide)
    {

        if (slide.id === id)
        {
            return Object.assign(storySlide, slide)
        }

    });

    return Object.assign({}, storySlide)
}