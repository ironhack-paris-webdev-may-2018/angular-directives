export class Destination {
  constructor(
    public _id: string,
    public name: string,
    public imageUrl: string
  ) { }
}

export const destinationList: Array<Destination> = [
  new Destination("pr", "Puerto Rico", "https://media.giphy.com/media/26AHQkfia9h00PjmU/giphy.gif"),
  new Destination("tz", "Tanzania", "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1522273706%2Fngorongoro-crater-tanzania-animals-lead-BUTTERFIELDTANZANIA0318.jpg%3Fitok%3DGoBtXXNl&w=700&q=85"),
  new Destination("ga", "Gabon", "http://scd.rfi.fr/sites/filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aef_image/gettyimages-527942350_0.jpg"),
  new Destination("cn", "China", "https://media.giphy.com/media/l2YWoMdBq9kbgvX7W/giphy.gif"),
  new Destination("tr", "Turkey", "https://media.giphy.com/media/ONm7TiPj6xzEc/giphy.gif"),
  new Destination("is", "Iceland", "https://media.giphy.com/media/BTTC3DrzlEfQY/giphy.gif"),
  new Destination("mx", "Mexico", "https://media.giphy.com/media/l0EryCPT7NMcc93Py/giphy.gif"),
];
