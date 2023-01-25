namespace AlgoReps.Domain;

public class ProblemList
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public List<ProblemListProblem> Problems { get; set; } = new ();
}
