package discapp;

import java.util.ArrayList;

/**
 * Created by cruot on 6/16/2017.
 */
public class PlayerDashboard implements java.io.Serializable{
    private Player player;
    PlayerData data = PlayerData.getInstance();

    public PlayerDashboard() {
        ArrayList<Round> rounds = new ArrayList<Round>();
        String user = "temp";
        this.player = new Player(user, rounds);
    }

    public Player getPlayer() {
        return this.player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public void setPlayerString(String username) {
        this.player = data.getPlayer(username);
    }

    public String getMessage() {
        return this.player.get_username() + ", you are awesome!!!" ;
    }

    public ArrayList<Round> getPlayerRounds() {
        return this.player.get_rounds();
    }

}

