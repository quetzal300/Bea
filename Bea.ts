class Bea {
    public name: string;
    public paternalName = 'Hernández Ramos';  
    private privatNeme = 'Cecilia';
    public arquitecta: Arquitectura | null = null;
    public feminismo = new Feminismo();  
    public familia = new AmorALaFamilia([]);  
  
    
    constructor(name: string, paternalLastName: string, ocupacion: Arquitectura) {
      this.name = name;
      this.paternalName = paternalLastName;
    }
  
    public getFullName(): string {
      return `${this.name} ${this.paternalName}`;
    }
  
    public tomarCafe(): void {
      console.log(`${this.name} está tomando café.`);
    }
  
    public trabajar(): void{
      const trabajoPesado = true;
      this.arquitecta?.crearSueñosHermosos(trabajoPesado);
      this.tomarCafe();
    }
  
    public heart(x: number, y: number): number {
       const equation = x ** 2 + (y - x ** (2/3)) ** 2;
       return equation;
    }
    
  }
  
  class Arquitectura {
      public estado: any[] = [];
  
      constructor(){
          this.estado.push('pasion');
          this.estado.push('esfuerzo');
      }
  
      public crearSueñosHermosos(trabajoPesado: boolean): string{
          if( trabajoPesado ){
              this.addEstres();
          }
          return 'Construir';
      }
  
      public addEstres(): void{
          this.estado.push('estres');
          this.estado.push('esfuerzo');
          this.estado.push('estres');
      }
  }
  
  class Activismo {
    lucharPorDerechos(): void {
      console.log("Luchar por los derechos de los grupos marginados");
    }
  }
  
  class Feminismo extends Activismo {
    igualdadDeGenero(): void {
      console.log("Luchar por la igualdad de género");
    }
  
    finViolenciaDeGenero(): void {
      console.log("Trabajar para poner fin a la violencia de género");
    }
  }
  
  class AmorALaFamilia {
    public familiares: string[];
  
    constructor(familiares: string[]) {
      this.familiares = familiares;
    }
  
    public mostrarFamiliares(): void {
      console.log("Estos son mis seres queridos: ");
      for (const familiar of this.familiares) {
        console.log("- " + familiar);
      }
    }
  
    public mostrarAmor(): void {
      console.log("Amamos a nuestra familia y hacemos todo lo posible para cuidarla y mantenerla unida.");
    }
  }