function component() {
    const element = document.createElement('div');
  
    element.innerText = 'Test message...';

    return element;
  }
  
  document.body.appendChild(component());