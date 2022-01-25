
import { setPokemon, setImage } from "./pokedex.js"
import "./charts.js"

const $form = document.querySelector('#form')
const $next = document.querySelector('#next-pokemon')
const $prev = document.querySelector('#prev-pokemon')
const $nextImage = document.querySelector('#next-image')
const $prevImage = document.querySelector('#prev-image')
const $pokedex = document.querySelector('#pokedex')
const $random = document.querySelector('#random-pokemon')

$form.addEventListener('submit', handleSubmit)
$next.addEventListener('click', handleNextPokemon)
$prev.addEventListener('click', handlePrevPokemon)
$nextImage.addEventListener('click', handleNextImage)
$prevImage.addEventListener('click', handlePrevImage)
$random.addEventListener('click', handleRandomPokemon)

let activePokemon = null
async function handleSubmit (event) {
        event.preventDefault()
        $pokedex.classList.add('is-open')
        const form = new FormData($form)
        const id = form.get('id') 
        activePokemon = await setPokemon(id)
}

async function handleNextPokemon() {
    const id =  ( activePokemon === null || activePokemon.id === 894) ? 1 : activePokemon.id + 1
    activePokemon = await setPokemon(id)
/*    Esto se convierte en ^
    if ( activePokemon.id === 894) {
        activePokemon = await setPokemon(1)
    }
    if( activePokemon !== null ) {
        activePokemon = await setPokemon(activePokemon.id + 1)
    }    
*/
}

async function handlePrevPokemon() {
    const id =  ( activePokemon === null || activePokemon.id === 1) ? 894 : activePokemon.id - 1
    activePokemon = await setPokemon(id)
}

async function handleRandomPokemon() {
    const id = Math.floor(Math.random() * 894 + 1)
    activePokemon = await setPokemon(id)
}

let activeSprite = 0

function handleNextImage() {
    if( activePokemon === null ) return false

    if( activeSprite >= activePokemon.sprites.length - 1) {
        activeSprite = 0
        return setImage(activePokemon.sprites[activeSprite])
    }

    activeSprite = activeSprite + 1
    return setImage(activePokemon.sprites[activeSprite])
}

function handlePrevImage() {
    if( activePokemon === null ) return false

    if( activeSprite <= 0) {
        activeSprite = activePokemon.sprites.length - 1
        return setImage(activePokemon.sprites[activeSprite])
    }
    
    activeSprite = activeSprite - 1
    return setImage(activePokemon.sprites[activeSprite])
}