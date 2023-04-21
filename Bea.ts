class Bea {
  public name: string;
  public fullName = 'Beatriz Hernández Ramos';  
  private privatNeme = 'Cecilia';
  public arquitecta: Arquitectura | null = null;
  public feminismo = new Feminismo();  
  public familia = new AmorALaFamilia([]);  

  
  constructor(name: string, fullName: string, ocupacion: Arquitectura) {
    this.name = name;
    this.fullName = fullName;
  }

  public getFullName(): string {
    return `${this.name} ${this.fullName}`;
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
  
  public sonrisa(): string {
      return ":-) jeje";
  }
  
   public altruista(): Promise<string> {
      return new Promise((resolve, reject) => {
      resolve("¡Ayuda desconsiderada!");
      setTimeout(() => {
          // Bea no se ha dado cuenta de lo que ha hecho
          reject("esfuerzo");
      }, 2000);
    });
   }
}

class Amor {
  private mundoColmadoDePeligros = true;
  private sitiosLobregos = true;
  private cosasHermosas = ['la naturaleza', 'el arte', 'el amor mismo'];
  private amorUnidoAAfliccion = true;
  private poderoso = true;

  public sentirAmor(): void {
    if (this.mundoColmadoDePeligros && this.sitiosLobregos) {
      console.log('Es cierto que el mundo está colmado de peligros y que hay en él sitios lóbregos, pero hay también cosas hermosas y aunque en todas partes el amor está unido hoy a la aflicción, no por eso es menos poderoso');
    }
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
