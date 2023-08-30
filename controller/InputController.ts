enum ActionBindings{
    MOVE_LEFT = 0,
    MOVE_RIGHT = 1,
    ROTATE_LEFT = 2,
    ROTATE_RIGHT = 3,
    DOWN = 4 
}
class GameController {
    constructor() {
        game.addEventListener('keydown', this.handleKeyDown)
    }

    private handleKeyDown(keydown: KeyboardEvent): ActionBindings{ 
        switch (keydown.code) {
            case "ArrowLeft" || "h":
                return ActionBindings.MOVE_LEFT;
            case "ArrowRight" || "l": 
                return ActionBindings.MOVE_RIGHT;
            case "ArrowUp" || "k":
                return ActionBindings.ROTATE_LEFT
            case "ArrowDown" || "j":
                return ActionBindings.ROTATE_RIGHT;
            case "Space":
                return ActionBindings.DOWN;
            default:
                break;
    }
    }
}


