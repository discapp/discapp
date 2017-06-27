package discapp;

import java.util.ArrayList;

public class Course {
	   private String name;
	    private ArrayList<Integer> par;

	    public Course(String name, ArrayList<Integer> par)
	    {
	        this.name = name;
	        this.par = par;
	    }

	    public String getName() {
	        return this.name;
	    }

	    public ArrayList<Integer> getPar() {
	        return this.par;
	}

}
