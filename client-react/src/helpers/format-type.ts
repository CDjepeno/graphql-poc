const formatType = (type: string): string => {
    let color: string;
   
    switch (type) {
      case 'Sayan': 
        color = 'bg-primary text-white'; 
        break; 
      case 'Namek': 
        color = 'bg-success text-white'; 
        break; 
      case 'Pride Toopers': 
        color = 'bg-danger text-white'; 
        break; 
      case 'Dieu de la destruction': 
        color = 'bg-light text-dark'; 
        break; 
      case 'Hitman': 
        color = 'bg-info text-white'; 
        break; 
      case 'Planet freezer': 
        color = 'bg-purple text-white'; 
        break; 
      case 'Cyborg': 
        color = 'bg-warning text-dark'; 
        break; 
      default: 
        color = 'bg-secondary text-white'; 
        break; 
    }
   
    return `badge ${color}`;
}

export default formatType;
