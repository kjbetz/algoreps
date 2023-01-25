namespace AlgoReps.Domain;

public class Problem
{
    public int Id { get; set; }
    public int SiteId { get; set; }
    public Difficulty Difficulty { get; set; }
    public string Title { get; set; } = "";
}
