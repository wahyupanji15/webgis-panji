import logoAFA from '../logo/AFA.png';

export class LogoAFAControl {
    onAdd(map) {
       this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
             <img
                src="${logoAFA}"
                alt="Logo AFA"
                style="width: 50px"
            >
        `;
        return this._container;
}

onRemove() {
        this._container.remove();
        this._map = undefined;
    }
    }