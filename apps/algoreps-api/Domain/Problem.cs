namespace AlgoReps.Domain;

public class Problem
{
    public int Id { get; set; }
    public string Title { get; set; } = String.Empty;

    public int SiteId { get; set; }
    public Site Site { get; set; }

    public Difficulty Difficulty { get; set; }
}
