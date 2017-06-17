package discapp;

import java.util.ArrayList;

/**
 * Created by cruot on 6/16/2017.
 */
public class PlayerDashboard implements java.io.Serializable{
    private Player player;
    private String message = "abc";

    public PlayerDashboard() {
        ArrayList<Round> rounds = new ArrayList<Round>();
        String user = "cruoti@gmail.com";
        this.player = new Player(user, rounds);
    }

    public Player getPlayer() {
        return this.player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public String getMessage() {
        return this.player.get_username() + ", you are awesome!!!" ;
    }

}
