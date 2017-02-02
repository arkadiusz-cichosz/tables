var male = [Robert, Stanisław, Roman, Arkadiusz, Włodzimierz];
var female = [Danuta, Jadwiga, Bożena,Kasia,Asia];
var allNames = male.concat(female);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}
