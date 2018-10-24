import { LUKE, C3PO, R2D2, VADER, LEIA, OWEN, R5D4, BIGGS, OBIWAN } from './../constants/images';

const getImage = name => {
  switch (name) {
    case 'Luke Skywalker':
      return LUKE;
    case 'C-3PO':
      return C3PO;
    case 'R2-D2':
      return R2D2;
    case 'Darth Vader':
      return VADER;
    case 'Leia Organa':
      return LEIA;
    case 'Owen Lars':
      return OWEN;
    case 'Beru Whitesun lars':
      return;
    case 'R5-D4':
      return R5D4;
    case 'Biggs Darklighter':
      return BIGGS;
    case 'Obi-Wan Kenobi':
      return OBIWAN;
    default:
      break;
  }
};

export default getImage;
