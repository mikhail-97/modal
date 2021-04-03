
document.addEventListener('click', function (e) {
    handleOpenModal(e)
    handleCloseModal(e)
})

function handleOpenModal(e) {
    const targetModal = e.target.dataset.modal

    if (targetModal) {
        const modal = document.querySelector(`#${targetModal}.modal`)
        modal.style.display = "block"
    }
}

function handleCloseModal(e) {
    const target = e.target
    const isCloseButton = target.classList.contains('j-close')
    const isClickedOutside = target.classList.contains('modal')

    if (isCloseButton || isClickedOutside) {
        const parentModal = target.closest('.modal')
        parentModal.style.display = "none"
    }
}
