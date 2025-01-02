const projectCard = (title) => {
    let divCard = document.createElement('div');
    divCard.className = 'projectCard';
    let titleP = document.createElement('p');
    titleP.innerText = title;
    divCard.appendChild(titleP);
    return divCard;
}

export { projectCard };