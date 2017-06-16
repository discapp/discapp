package discapp;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created by cruot on 6/16/2017.
 */
public class Round {
    private Date date;
    private String course_name;

    private ArrayList<Integer> scores;

    public void Round(Date date, String course_name, ArrayList<Integer> scores)
    {
        this.date = date;
        this.course_name = course_name;
        this.scores = scores;
    }

    public Date getDate() {
        return date;
    }

    public String getCourse_name() {
        return course_name;
    }

    public ArrayList<Integer> getScores() {
        return scores;
    }

}
