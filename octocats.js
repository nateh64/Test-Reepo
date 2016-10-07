//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocat(name, arms)
{
  this.name = name;
  this.arms = arms;

  this.slap = function ()
  {
    for(i=0; i<this.arms; i++)
    {
      console.log("Slap");

    }
  };

}



//Write your 3 new octocat objects below here.
var gatu = new Octocat('Gatu',8);var
