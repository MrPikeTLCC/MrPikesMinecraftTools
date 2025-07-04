player.onChat("towerroom", function () {
    towerRoom()
})
player.onChat("turnagent", function (radius) {
    for (let index = 0; index < radius; index++) {
        agent.turn(RIGHT_TURN)
    }
    player.say(agent.getOrientation())
})
function towersurprise() {
    index62 = randint(1, 5)
    agent.setSlot(8)
    if (index62 == 1) {
        agent.setItem(MONSTER_SPAWNER, 1, 8)
        agent.place(DOWN)
        list = [
            mobs.monster(ZOMBIE),
            mobs.monster(CREEPER),
            mobs.monster(SKELETON),
            mobs.monster(SPIDER)
        ]
        agent.setItem(list._pickRandom(), 1, 8)
        agent.interact(DOWN)
    } else if (index62 == 2) {
        list = [
            CHEST,
            CHEST,
            BOOKSHELF,
            ENCHANTMENT_TABLE,
            DISPENSER,
            BOOKSHELF,
            FURNACE,
            CRAFTING_TABLE,
            BREWING_STAND,
            CAULDRON,
            CARTOGRAPHY_TABLE,
            CHISELED_STONE_BRICKS,
            BARREL,
            FLETCHING_TABLE,
            BLAST_FURNACE,
            STONECUTTER_BLOCK,
            SMOKER,
            JUKEBOX,
            SMITHING_TABLE,
            CAMPFIRE,
            CRAFTER,
            LOOM,
            COMPOSTER,
            BAMBOO_MOSAIC_STAIRS,
            BARREL,
            MOSSY_STONE_BRICKS,
            AIR,
            COBWEB
        ]
        agent.dropAll(BACK)
        agent.setAssist(PLACE_FROM_ANY_SLOT, true)
        agent.setItem(list._pickRandom(), 1, 1)
        agent.setItem(list._pickRandom(), 1, 2)
        agent.setItem(list._pickRandom(), 1, 3)
        agent.setItem(list._pickRandom(), 1, 4)
        agent.setItem(list._pickRandom(), 1, 5)
        agent.setItem(list._pickRandom(), 1, 6)
        agent.move(FORWARD, 1)
        agent.move(LEFT, 1)
        agent.turn(LEFT_TURN)
        for (let index = 0; index <= 2; index++) {
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.turn(LEFT_TURN)
        for (let index = 0; index <= 3; index++) {
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.move(LEFT, 2)
        agent.setAssist(PLACE_FROM_ANY_SLOT, false)
    } else if (index62 == 3) {
        list = [
            TNT,
            FURNACE,
            CRAFTING_TABLE,
            blocks.blockWithData(BED,colourID),
            JUKEBOX,
            JACK_O_LANTERN,
            CAKE,
            ENCHANTMENT_TABLE,
            BREWING_STAND,
            CAULDRON,
            ENDER_CHEST,
            ANVIL,
            CARTOGRAPHY_TABLE,
            FLETCHING_TABLE,
            CAMPFIRE,
            SOUL_CAMPFIRE,
            AMETHYST_CLUSTER,
            STONECUTTER_BLOCK,
            SMOKER,
            SMITHING_TABLE,
            STONECUTTER,
            BARREL,
            LOOM,
            BELL,
            SCULK_SHRIEKER,
            BEE_NEST,
            SCAFFOLDING,
            FIRE
        ]
        agent.setItem(list._pickRandom(), 1, 8)
        agent.place(DOWN)
    } else if (index62 == 4) {
        agent.move(FORWARD,1)
        agent.move(RIGHT,1)
        agent.move(UP,1)
        agent.setItem(CHAIN,1,8)
        agent.place(UP)
        agent.move(DOWN,1)
        agent.setItem(BELL,1,8)
        agent.place(UP)
        agent.move(LEFT,1)
        agent.move(BACK, 1)
    } else {
        agent.move(FORWARD, 1)
        agent.move(DOWN, 1)
        agent.setAssist(DESTROY_OBSTACLES, true)
        agent.move(LEFT, 2)
        agent.move(UP, 2)
        agent.move(BACK, 1)
        agent.move(DOWN, 2)
        agent.move(BACK, 1)
        agent.move(UP, 2)
        agent.setItem(CHISELED_STONE_BRICKS, 1, 1)
        agent.destroy(BACK)
        agent.setSlot(1)
        agent.place(BACK)
        agent.move(RIGHT, 1)
        agent.setItem(TORCH, 6, 5)
        agent.setSlot(5)
        agent.place(LEFT)
        agent.move(BACK, 1)
        agent.place(LEFT)
        agent.move(DOWN, 2)
        agent.move(RIGHT, 1)
        agent.move(UP, 2)
        agent.move(RIGHT, 1)
        agent.move(DOWN, 2)
        agent.move(FORWARD, 2)
        agent.move(UP, 1)
        agent.move(LEFT, 1)
    }
}
function tunnelSegment(distance: number, width: number, height: number) {

}
player.onChat("bridge", function (distance, width) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 0
    for (let index = 0; index < distance; index++) {
        for (let index = 0; index < width; index++) {
            agent.setItem(STONE_BRICKS, 3, 1)
            agent.setSlot(1)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
            agent.move(LEFT, 1)
            agent.place(DOWN)
            agent.move(RIGHT, 2)
            agent.place(DOWN)
            agent.move(LEFT, 1)
            if (torchfrequency == width) {
                agent.setItem(CHISELED_STONE_BRICKS, 2, 2)
                agent.setSlot(2)
                agent.turn(LEFT_TURN)
                agent.place(FORWARD)
                agent.turn(RIGHT_TURN)
                agent.turn(RIGHT_TURN)
                agent.place(FORWARD)
                agent.turn(LEFT_TURN)
                agent.move(UP, 1)
                agent.setItem(TORCH, 2, 2)
                agent.place(LEFT)
                agent.place(RIGHT)
                agent.move(DOWN, 1)
                torchfrequency = 0
            } else {
                agent.setItem(139, 2, 2)
                agent.setSlot(2)
                agent.turn(LEFT_TURN)
                agent.place(FORWARD)
                agent.turn(RIGHT_TURN)
                agent.turn(RIGHT_TURN)
                agent.place(FORWARD)
                agent.turn(LEFT_TURN)
                torchfrequency += 1
            }
        }
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
})
player.onChat("tunnel", function (distance, width, height) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 5
    agent.setSlot(1)
    for (let index = 0; index < distance; index++) {
        for (let index = 0; index < width - 1; index++) {
            blocks.fill(
                AIR,
                positions.add(
                    agent.getPosition(),
                    pos(0, 0, 0)
                ),
                positions.add(
                    agent.getPosition(),
                    pos(0, height, 0)
                ),
                FillOperation.Replace
            )
            agent.move(RIGHT, 1)
        }
        blocks.fill(
            AIR,
            positions.add(
                agent.getPosition(),
                pos(0, 0, 0)
            ),
            positions.add(
                agent.getPosition(),
                pos(0, height, 0)
            ),
            FillOperation.Replace
        )
        if (torchfrequency == 0) {
            agent.setItem(TORCH, 2, 1)
            agent.move(UP, 1)
            agent.place(RIGHT)
            agent.move(DOWN, 1)
        }
        agent.move(LEFT, width - 1)
        if (torchfrequency == 0) {
            agent.move(UP, 1)
            agent.place(LEFT)
            agent.move(DOWN, 1)
            torchfrequency = 5
        } else {
            torchfrequency += -1
        }
        agent.move(FORWARD, 1)
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
})
player.onChat("square", function (width) {
    blocks.fill(
        STONE_BRICKS,
        pos(width / -0.5, 0, width / -0.5),
        pos(width / 2, 0, width / 2),
        FillOperation.Replace
    )
})
player.onChat("getagent", function () {
    agent.teleportToPlayer()
})
player.onChat("oakcircle", function (radius, h, y) {
    circle(radius, h, PLANKS_OAK, y)
})
player.onChat("createhubbase", function () {
    circle(8, 2, POLISHED_ANDESITE, -1)
    circle(7, 1, POLISHED_ANDESITE, 1)
    circle(6, 1, POLISHED_ANDESITE, 2)
})
function circle(radius: number, height: number, block: number, ypos: number) {
    for (let y = 0; y <= height; y++) {
        if (y < height) {
            for (let x = 0; x <= radius; x++) {
                for (let ddz = 0; ddz <= radius; ddz++) {
                    if (x * ddz + x * ddz < radius * radius) {
                        blocks.place(block, pos(x * 1, y + ypos, ddz * 1))
                        blocks.place(block, pos(x * 1, y + ypos, ddz * -1))
                        blocks.place(block, pos(x * -1, y + ypos, ddz * -1))
                        blocks.place(block, pos(x * -1, y + ypos, ddz * 1))
                    }
                }
            }
        }
    }
}
function towerRoom() {
    towerDecorativeRoom(randint(0, 15))
}

function towerDecorativeRoom(colourID: number) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    blocks.fill(
        STONE_BRICKS,
        positions.add(
            agent.getPosition(),
            pos(4, 2, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, 6, -4)
        ),
        FillOperation.Hollow
    )
    blocks.fill(
        AIR,
        positions.add(
            agent.getPosition(),
            pos(3, 2, 3)
        ),
        positions.add(
            agent.getPosition(),
            pos(-3, 6, -3)
        ),
        FillOperation.Destroy
    )
    agent.move(BACK, 1)
    agent.setItem(POLISHED_TUFF_WALL, 4, 9)
    agent.setSlot(9)
    for (let index = 0; index <= 2; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.place(FORWARD)
    agent.move(BACK, 1)
    agent.move(RIGHT, 1)
    agent.move(UP, 1)
    towersurprise()
    agent.move(UP, 5)
    agent.move(BACK, 2)
    agent.move(FORWARD, 9)
    agent.move(RIGHT, 2)
    agent.move(BACK, 10)
    agent.move(RIGHT, 2)
    agent.move(FORWARD, 10)
    agent.move(RIGHT, 3)
    agent.move(BACK, 3)
    agent.move(LEFT, 10)
    agent.move(BACK, 2)
    agent.move(RIGHT, 10)
    agent.move(BACK, 2)
    agent.move(LEFT, 10)
    agent.move(BACK, 2)
    agent.move(UP, 1)
    agent.move(RIGHT, 1)
    agent.setItem(TORCH, 4, 9)
    for (let index2 = 0; index2 < 4; index2++) {
        agent.place(DOWN)
        agent.move(FORWARD, 8)
        agent.turn(RIGHT_TURN)
    }
    agent.move(FORWARD, 4)
    agent.move(RIGHT, 4)
    blocks.fill(
        CHISELED_STONE_BRICKS,
        positions.add(
            agent.getPosition(),
            pos(-2, -3, -2)
        ),
        positions.add(
            agent.getPosition(),
            pos(2, -3, 2)
        ),
        FillOperation.Replace
    )
    blocks.fill(
        EMERALD_BLOCK,
        positions.add(
            agent.getPosition(),
            pos(-2, -2, -2)
        ),
        positions.add(
            agent.getPosition(),
            pos(2, -2, 2)
        ),
        FillOperation.Replace
    )
    blocks.fill(
        EMERALD_BLOCK,
        positions.add(
            agent.getPosition(),
            pos(-1, -1, -1)
        ),
        positions.add(
            agent.getPosition(),
            pos(1, -1, 1)
        ),
        FillOperation.Replace
    )
    agent.setItem(BEACON, 1, 1)
    agent.setSlot(1)
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.move(UP, 1)
    agent.setItem(GetGlassColour(colourID), 1, 1)
    agent.setSlot(1)
    agent.place(DOWN)
}

function GetGlassColour(colourID: number){
    switch (colourID) {
        case 0: return WHITE_STAINED_GLASS;
        case 1: return ORANGE_STAINED_GLASS;
        case 2: return MAGENTA_STAINED_GLASS;
        case 3: return LIGHT_BLUE_STAINED_GLASS;
        case 4: return YELLOW_STAINED_GLASS;
        case 5: return LIME_STAINED_GLASS;
        case 6: return PINK_STAINED_GLASS;
        case 7: return GRAY_STAINED_GLASS;
        case 8: return LIGHT_GRAY_STAINED_GLASS;
        case 9: return CYAN_STAINED_GLASS;
        case 10: return PURPLE_STAINED_GLASS;
        case 11: return BLUE_STAINED_GLASS;
        case 12: return BROWN_STAINED_GLASS;
        case 13: return GREEN_STAINED_GLASS;
        case 14: return RED_STAINED_GLASS;
        case 15: return BLACK_STAINED_GLASS;
        default: return GLASS; // fallback
    }
}

function GetPaneColour(colourID: number) {
    switch (colourID) {
        case 0: return WHITE_STAINED_GLASS_PANE;
        case 1: return ORANGE_STAINED_GLASS_PANE;
        case 2: return MAGENTA_STAINED_GLASS_PANE;
        case 3: return LIGHT_BLUE_STAINED_GLASS_PANE;
        case 4: return YELLOW_STAINED_GLASS_PANE;
        case 5: return LIME_STAINED_GLASS_PANE;
        case 6: return PINK_STAINED_GLASS_PANE;
        case 7: return GRAY_STAINED_GLASS_PANE;
        case 8: return LIGHT_GRAY_STAINED_GLASS_PANE;
        case 9: return CYAN_STAINED_GLASS_PANE;
        case 10: return PURPLE_STAINED_GLASS_PANE;
        case 11: return BLUE_STAINED_GLASS_PANE;
        case 12: return BROWN_STAINED_GLASS_PANE;
        case 13: return GREEN_STAINED_GLASS_PANE;
        case 14: return RED_STAINED_GLASS_PANE;
        case 15: return BLACK_STAINED_GLASS_PANE;
        default: return GLASS_PANE; // fallback
    }
}

function towerSegment(floors: number) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    orientation = agent.getOrientation()
    blocks.fill(
        STONE_BRICKS,
        positions.add(
            agent.getPosition(),
            pos(4, -1, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, floors, -4)
        ),
        FillOperation.Hollow
    )
    blocks.fill(
        STONE_BRICKS,
        positions.add(
            agent.getPosition(),
            pos(0, 1, 0)
        ),
        positions.add(
            agent.getPosition(),
            pos(0, floors, 0)
        ),
        FillOperation.Replace
    )
    while (y6 < floors - 2) {
        agent.setItem(STONE_BRICK_STAIRS, 64, 1)
        agent.setItem(TORCH, 4, 2)
        if (agent.getOrientation() == -90) {
            offsetX = 1
            offsetZ = -1
        } else if (agent.getOrientation() == -180) {
            offsetX = -1
            offsetZ = -1
        } else if (agent.getOrientation() == 90) {
            offsetX = -1
            offsetZ = 1
        } else {
            offsetX = 1
            offsetZ = 1
        }
        blocks.fill(
            STONE_BRICKS,
            positions.add(
                agent.getPosition(),
                pos(3 * offsetX, y6, 3 * offsetZ)
            ),
            positions.add(
                agent.getPosition(),
                pos(1 * offsetX, y6, 1 * offsetZ)
            ),
            FillOperation.Replace
        )
        agent.turn(RIGHT_TURN)
        y6 += 1
    }
    while (agent.getOrientation() != orientation) {
        agent.turn(RIGHT_TURN)
    }
    agent.move(BACK, 1)
    agent.setItem(STONE_BRICKS, 1, 1)
    agent.setItem(TORCH, 1, 2)
    agent.setItem(STONE_BRICK_STAIRS, 3, 3)
    agent.setSlot(1)
    agent.place(FORWARD)
    // Make a door hole
    agent.move(LEFT, 3)
    agent.move(UP, 1)
    agent.destroy(LEFT)
    agent.move(LEFT, 1)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.destroy(BACK)
    agent.move(BACK, 1)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.destroy(BACK)
    agent.move(BACK, 1)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 4)
    agent.move(DOWN,1)
    // Start building stairs and decorating tower
    for (let y = 0; y <= floors - 3; y++) {
        agent.setSlot(2)
        agent.move(UP, 1)
        agent.place(FORWARD)
        agent.move(DOWN, 1)
        agent.setSlot(3)
        for (let index = 0; index < 3; index++) {
            agent.move(LEFT, 1)
            agent.place(FORWARD)
        }
        agent.move(UP, 2)
        agent.move(FORWARD, 3)
        agent.destroy(LEFT)
        if (agent.detect(AgentDetection.Block, LEFT)) {
            agent.setItem(GLASS, 1, 4)
        } else {
            agent.move(LEFT, 1)
            if (agent.detect(AgentDetection.Block, LEFT)) {
                agent.setItem(SOUL_CAMPFIRE, 1, 4)
            } else {
                agent.setItem(IRON_BARS, 1, 4)
            }
            agent.move(RIGHT, 1)
        }
        agent.setSlot(4)
        agent.place(LEFT)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 2)
        agent.move(RIGHT, 2)
        agent.move(DOWN, 1)
    }
}

function towerDecorativeSegment(floors: number, colourID: number) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    orientation = agent.getOrientation()
    blocks.fill(
        STONE_BRICKS,
        positions.add(
            agent.getPosition(),
            pos(4, -1, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, floors, -4)
        ),
        FillOperation.Hollow
    )
    blocks.fill(
        STONE_BRICKS,
        positions.add(
            agent.getPosition(),
            pos(0, 1, 0)
        ),
        positions.add(
            agent.getPosition(),
            pos(0, floors, 0)
        ),
        FillOperation.Replace
    )
    while (y6 < floors - 2) {
        agent.setItem(STONE_BRICK_STAIRS, 64, 1)
        agent.setItem(TORCH, 4, 2)
        if (agent.getOrientation() == -90) {
            offsetX = 1
            offsetZ = -1
        } else if (agent.getOrientation() == -180) {
            offsetX = -1
            offsetZ = -1
        } else if (agent.getOrientation() == 90) {
            offsetX = -1
            offsetZ = 1
        } else {
            offsetX = 1
            offsetZ = 1
        }
        blocks.fill(
            blocks.blockWithData(WOOL, colourID),
            positions.add(
                agent.getPosition(),
                pos(3 * offsetX, y6, 3 * offsetZ)
            ),
            positions.add(
                agent.getPosition(),
                pos(1 * offsetX, y6, 1 * offsetZ)
            ),
            FillOperation.Replace
        )
        agent.turn(RIGHT_TURN)
        y6 += 1
    }
    while (agent.getOrientation() != orientation) {
        agent.turn(RIGHT_TURN)
    }
    agent.move(BACK, 1)
    agent.setItem(STONE_BRICKS, 1, 1)
    agent.setItem(TORCH, 1, 2)
    agent.setItem(STONE_BRICK_STAIRS, 3, 3)
    agent.setSlot(1)
    agent.place(FORWARD)
    // Make a door hole
    agent.move(LEFT, 3)
    agent.move(UP, 1)
    agent.destroy(LEFT)
    agent.move(LEFT, 1)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.destroy(BACK)
    agent.move(BACK, 1)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.destroy(BACK)
    agent.move(BACK, 1)
    agent.destroy(UP)
    agent.destroy(DOWN)
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 4)
    agent.move(DOWN, 1)
    // Start building stairs and decorating tower
    for (let y = 0; y <= floors - 3; y++) {
        agent.setSlot(2)
        agent.move(UP, 1)
        agent.place(FORWARD)
        agent.move(DOWN, 1)
        agent.setSlot(3)
        for (let index = 0; index < 3; index++) {
            agent.move(LEFT, 1)
            agent.place(FORWARD)
        }
        agent.move(UP, 2)
        agent.move(FORWARD, 3)
        agent.destroy(LEFT)
        if (agent.detect(AgentDetection.Block, LEFT)) {
            agent.setItem(blocks.blockWithData(GetGlassColour(colourID), colourID), 1, 4)
        } else {
            agent.move(LEFT, 1)
            if (agent.detect(AgentDetection.Block, LEFT)) {
                agent.setItem(SOUL_CAMPFIRE, 1, 4)
            } else {
                agent.setItem(blocks.blockWithData(GetPaneColour(colourID),colourID), 1, 4)
            }
            agent.move(RIGHT, 1)
        }
        agent.setSlot(4)
        agent.place(LEFT)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 2)
        agent.move(RIGHT, 2)
        agent.move(DOWN, 1)
    }
}
player.onChat("clonecircle", function (radius, height, offsetY) {
    for (let y2 = 0; y2 <= height; y2++) {
        if (y2 < height) {
            for (let x2 = 0; x2 <= radius; x2++) {
                for (let ddz2 = 0; ddz2 <= radius; ddz2++) {
                    if (x2 * ddz2 + x2 * ddz2 < radius * radius) {
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * 1, y2 + offsetY, ddz2 * 1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * 1, y2 + offsetY, ddz2 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * -1, y2 + offsetY, ddz2 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * -1, y2 + offsetY, ddz2 * 1))
                    }
                }
            }
        }
    }
})
player.onChat("towerupcc", function (height) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        brick1 = agent.inspect(AgentInspection.Block, FORWARD)
    } else {
        brick1 = agent.getItemDetail(STONE_BRICKS)
    }
    if (agent.detect(AgentDetection.Block, DOWN)) {
        brick2 = agent.inspect(AgentInspection.Block, DOWN)
    } else {
        brick2 = agent.getItemDetail(CRACKED_STONE_BRICKS)
    }
    if (agent.detect(AgentDetection.Block, LEFT)) {
        brick3 = agent.inspect(AgentInspection.Block, DOWN)
    } else if (agent.detect(AgentDetection.Block, RIGHT)) {
        brick3 = agent.inspect(AgentInspection.Block, RIGHT)
    } else {
        brick3 = MOSSY_STONE_BRICKS
    }
    lightid = TORCH
    brick4 = IRON_BARS
    stairtype = STONE_BRICK_STAIRS
    agent.setAssist(DESTROY_OBSTACLES, true)
    agent.move(RIGHT, 4)
    agent.move(BACK, 4)
    blocks.fill(
        AIR,
        positions.add(
            agent.getPosition(),
            pos(4, 0, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, height, -4)
        ),
        FillOperation.Replace
    )
    agent.move(FORWARD, 4)
    agent.move(LEFT, 4)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setItem(brick1, 64, 1)
    agent.setSlot(1)
    for (let index42 = 0; index42 <= height; index42++) {
        agent.setItem(brick1, 64, 1)
        agent.setItem(brick2, 64, 2)
        agent.setItem(brick3, 64, 3)
        agent.setItem(lightid, 1, 5)
        agent.setItem(brick4, 1, 4)
        agent.setItem(stairtype, 1, 6)
        agent.setSlot(randint(1, 3))
        agent.setAssist(PLACE_ON_MOVE, true)
        for (let index = 0; index < 8; index++) {
            agent.setSlot(randint(1, 3))
            agent.move(RIGHT, 1)
        }
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 6; index++) {
            agent.setSlot(randint(1, 3))
            agent.move(RIGHT, 1)
        }
        agent.turn(RIGHT_TURN)
        agent.destroy(DOWN)
        agent.setSlot(4)
        agent.place(DOWN)
        for (let index = 0; index < 2; index++) {
            agent.setSlot(randint(1, 3))
            agent.move(FORWARD, 1)
        }
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 8; index++) {
                agent.setSlot(randint(1, 3))
                agent.move(RIGHT, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.turn(RIGHT_TURN)
        agent.setSlot(randint(1, 3))
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 2)
        agent.move(RIGHT, 4)
        agent.move(DOWN, 1)
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(6)
        agent.place(FORWARD)
        for (let index = 0; index < 2; index++) {
            agent.move(LEFT, 1)
            agent.place(FORWARD)
        }
        agent.setSlot(randint(1, 3))
        agent.move(UP, 1)
        agent.move(RIGHT, 3)
        agent.setSlot(5)
        agent.place(DOWN)
        agent.setSlot(randint(1, 3))
        agent.move(FORWARD, 2)
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 3; index++) {
                agent.setSlot(randint(1, 3))
                agent.place(DOWN)
                agent.move(LEFT, 1)
            }
            agent.setSlot(randint(1, 3))
            agent.place(DOWN)
            agent.move(RIGHT, 3)
            agent.move(FORWARD, 1)
        }
        agent.move(LEFT, 4)
    }
})
player.onChat("liquiddirt", function (depth, radius, time) {
    blocks.fill(
        WATER,
        posCamera(0, 0, 1),
        positions.add(
            posCamera(0, 0, 1),
            pos(0, depth * -1, 0)
        ),
        FillOperation.Keep
    )
    num1 = time + gameplay.timeQuery(GAME_TIME)
    while (gameplay.timeQuery(GAME_TIME) < num1) {
        player.say(num1 - time)
    }
    blocks.replace(
        DIRT,
        WATER,
        positions.add(
            player.position(),
            pos(radius, 0, radius)
        ),
        positions.add(
            player.position(),
            pos(radius * -1, radius * -1, radius * -1)
        )
    )
})
player.onChat("autoladder", function () {
    while (agent.detect(AgentDetection.Block, FORWARD) && !(agent.detect(AgentDetection.Block, UP))) {
        agent.setItem(LADDER, 1, 1)
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
})
player.onChat("agentorientation", function () {
    player.say(agent.getOrientation())
})
player.onChat("tunnelup", function (distance, width, height) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 5
    agent.setSlot(1)
    for (let index = 0; index < distance; index++) {
        for (let index = 0; index < width - 1; index++) {
            blocks.fill(
                AIR,
                positions.add(
                    agent.getPosition(),
                    pos(0, 0, 0)
                ),
                positions.add(
                    agent.getPosition(),
                    pos(0, height, 0)
                ),
                FillOperation.Replace
            )
            agent.move(RIGHT, 1)
        }
        blocks.fill(
            AIR,
            positions.add(
                agent.getPosition(),
                pos(0, 0, 0)
            ),
            positions.add(
                agent.getPosition(),
                pos(0, height, 0)
            ),
            FillOperation.Replace
        )
        if (torchfrequency == 0) {
            agent.setItem(TORCH, 2, 1)
            agent.move(UP, 1)
            agent.place(RIGHT)
            agent.move(DOWN, 1)
        }
        agent.move(LEFT, width - 1)
        if (torchfrequency == 0) {
            agent.move(UP, 1)
            agent.place(LEFT)
            agent.move(DOWN, 1)
            torchfrequency = 5
        } else {
            torchfrequency += -1
        }
        agent.move(FORWARD, 1)
        agent.move(UP, 1)
        agent.setItem(STONE_BRICK_STAIRS, width, 1)
        for (let index = 0; index < width - 1; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(LEFT, width - 1)
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
})
player.onChat("glasscircle", function (radius, h, y) {
    circle(radius, h, GLASS, y)
})
player.onChat("fillcircle", function (radius, h, y) {
    circle(radius, h, POLISHED_ANDESITE, y)
})
player.onChat("clonecylinder", function (radius, height, offsetY) {
    for (let y3 = 0; y3 <= height; y3++) {
        if (y3 < height) {
            for (let x3 = 0; x3 <= radius; x3++) {
                for (let ddz3 = 0; ddz3 <= radius; ddz3++) {
                    if (x3 * ddz3 + x3 * ddz3 >= (radius - 1) * (radius - 1) && x3 * ddz3 + x3 * ddz3 <= radius * radius) {
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * 1, y3 + offsetY, ddz3 * 1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * 1, y3 + offsetY, ddz3 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * -1, y3 + offsetY, ddz3 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * -1, y3 + offsetY, ddz3 * 1))
                    }
                }
            }
        }
    }
})
player.onChat("inspect", function () {
    player.say(agent.inspect(AgentInspection.Block, FORWARD))
    player.say(agent.inspect(AgentInspection.Data, FORWARD))
})
player.onChat("towercap", function () {
    brick1 = agent.getItemDetail(1)
    brick2 = agent.getItemDetail(2)
    brick3 = agent.getItemDetail(3)
    lightid = agent.getItemDetail(5)
    brick4 = agent.getItemDetail(4)
    stairtype = agent.getItemDetail(6)
    agent.setAssist(DESTROY_OBSTACLES, true)
    agent.move(RIGHT, 4)
    agent.move(BACK, 4)
    blocks.fill(
        AIR,
        positions.add(
            agent.getPosition(),
            pos(4, 0, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, 6, -4)
        ),
        FillOperation.Replace
    )
    agent.move(FORWARD, 4)
    agent.move(LEFT, 4)
    agent.setItem(brick1, 64, 1)
    agent.setItem(brick2, 64, 2)
    agent.setItem(brick3, 64, 3)
    agent.setItem(lightid, 1, 5)
    agent.setItem(brick4, 1, 4)
    agent.setItem(stairtype, 1, 6)
    agent.setSlot(randint(1, 3))
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 8; index++) {
                agent.setSlot(randint(1, 3))
                agent.move(RIGHT, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(BACK, 4)
    agent.move(RIGHT, 4)
    blocks.fill(
        agent.getItemDetail(randint(1, 3)),
        positions.add(
            agent.getPosition(),
            pos(4, 0, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, 0, -4)
        ),
        FillOperation.Replace
    )
    agent.setAssist(DESTROY_OBSTACLES, false)
    agent.move(DOWN, 5)
    agent.move(FORWARD, 2)
    agent.move(LEFT, 2)
    towersurprise()
})
player.onChat("glasstunnel", function (distance, width, height) {
    if (agent.getOrientation() == 0) {
        dwx = -1
        dwz = 0
        ddx = 0
        ddz5 = 1
        offsetX = 1
        offsetZ = -1
    } else if (agent.getOrientation() == 90) {
        dwx = 0
        dwz = -1
        ddx = -1
        ddz5 = 0
        offsetX = 1
        offsetZ = 1
    } else if (agent.getOrientation() == 180) {
        dwx = 1
        dwz = 0
        ddx = 0
        ddz5 = -1
        offsetX = -1
        offsetZ = 1
    } else if (agent.getOrientation() == 270) {
        dwx = 0
        dwz = -1
        ddx = 1
        ddz5 = 0
        offsetX = -1
        offsetZ = 1
    } else {

    }
    x5 = dwx * (width + 1) + ddx * distance
    z = dwz * (width + 1) + ddz5 * distance
    blocks.fill(
        GLASS,
        positions.add(
            agent.getPosition(),
            pos(offsetX, -1, offsetZ)
        ),
        positions.add(
            agent.getPosition(),
            pos(x5 + offsetX, height + 1, z + offsetZ)
        ),
        FillOperation.Hollow
    )
    torchfrequency = 8
    while (distance >= torchfrequency) {
        distance += -1 * torchfrequency
        agent.setItem(SEA_LANTERN, 2, 1)
        agent.move(FORWARD, torchfrequency)
        agent.move(UP, 1)
        agent.destroy(LEFT)
        agent.place(LEFT)
        agent.move(RIGHT, width - 1)
        agent.destroy(RIGHT)
        agent.place(RIGHT)
        agent.move(DOWN, 1)
        agent.move(LEFT, width - 1)
    }
})
player.onChat("clearcircle", function (radius, height, offsetY) {
    for (let y4 = 0; y4 <= height; y4++) {
        if (y4 < height) {
            for (let x4 = 0; x4 <= radius; x4++) {
                for (let ddz4 = 0; ddz4 <= radius; ddz4++) {
                    if (x4 * ddz4 + x4 * ddz4 < radius * radius) {
                        blocks.place(AIR, pos(x4 * 1, y4 + offsetY, ddz4 * 1))
                        blocks.place(AIR, pos(x4 * 1, y4 + offsetY, ddz4 * -1))
                        blocks.place(AIR, pos(x4 * -1, y4 + offsetY, ddz4 * -1))
                        blocks.place(AIR, pos(x4 * -1, y4 + offsetY, ddz4 * 1))
                    }
                }
            }
        }
    }
})
player.onChat("towerupex", function (height) {
    brick1 = agent.getItemDetail(1)
    brick2 = agent.getItemDetail(2)
    brick3 = agent.getItemDetail(3)
    lightid = agent.getItemDetail(5)
    brick4 = agent.getItemDetail(4)
    stairtype = agent.getItemDetail(6)
    agent.setAssist(DESTROY_OBSTACLES, true)
    agent.move(RIGHT, 4)
    agent.move(BACK, 4)
    blocks.fill(
        AIR,
        positions.add(
            agent.getPosition(),
            pos(4, 0, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, height, -4)
        ),
        FillOperation.Replace
    )
    agent.move(FORWARD, 4)
    agent.move(LEFT, 4)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setItem(brick1, 64, 1)
    agent.setSlot(1)
    for (let index52 = 0; index52 <= height; index52++) {
        agent.setItem(brick1, 64, 1)
        agent.setItem(brick2, 64, 2)
        agent.setItem(brick3, 64, 3)
        agent.setItem(lightid, 1, 5)
        agent.setItem(brick4, 1, 4)
        agent.setItem(stairtype, 1, 6)
        agent.setSlot(randint(1, 3))
        agent.setAssist(PLACE_ON_MOVE, true)
        for (let index = 0; index < 8; index++) {
            agent.setSlot(randint(1, 3))
            agent.move(RIGHT, 1)
        }
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 6; index++) {
            agent.setSlot(randint(1, 3))
            agent.move(RIGHT, 1)
        }
        agent.turn(RIGHT_TURN)
        agent.destroy(DOWN)
        agent.setSlot(4)
        agent.place(DOWN)
        for (let index = 0; index < 2; index++) {
            agent.setSlot(randint(1, 3))
            agent.move(FORWARD, 1)
        }
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 8; index++) {
                agent.setSlot(randint(1, 3))
                agent.move(RIGHT, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.turn(RIGHT_TURN)
        agent.setSlot(randint(1, 3))
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 2)
        agent.move(RIGHT, 4)
        agent.move(DOWN, 1)
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(6)
        agent.place(FORWARD)
        for (let index = 0; index < 2; index++) {
            agent.move(LEFT, 1)
            agent.place(FORWARD)
        }
        agent.setSlot(randint(1, 3))
        agent.move(UP, 1)
        agent.move(RIGHT, 3)
        agent.setSlot(5)
        agent.place(DOWN)
        agent.setSlot(randint(1, 3))
        agent.move(FORWARD, 2)
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 3; index++) {
                agent.setSlot(randint(1, 3))
                agent.place(DOWN)
                agent.move(LEFT, 1)
            }
            agent.setSlot(randint(1, 3))
            agent.place(DOWN)
            agent.move(RIGHT, 3)
            agent.move(FORWARD, 1)
        }
        agent.move(LEFT, 4)
    }
})
player.onChat("towertop", function () {
    brick1 = agent.getItemDetail(1)
    brick2 = agent.getItemDetail(2)
    brick3 = agent.getItemDetail(3)
    lightid = agent.getItemDetail(5)
    brick4 = agent.getItemDetail(4)
    stairtype = agent.getItemDetail(6)
    agent.setAssist(DESTROY_OBSTACLES, true)
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(RIGHT, 4)
    agent.move(BACK, 4)
    blocks.fill(
        AIR,
        positions.add(
            agent.getPosition(),
            pos(4, 0, 4)
        ),
        positions.add(
            agent.getPosition(),
            pos(-4, 4, -4)
        ),
        FillOperation.Replace
    )
    agent.move(FORWARD, 4)
    agent.move(LEFT, 4)
    agent.setItem(brick1, 64, 1)
    agent.setItem(brick2, 64, 2)
    agent.setItem(brick3, 64, 3)
    agent.setItem(lightid, 1, 5)
    agent.setItem(brick4, 1, 4)
    agent.setItem(stairtype, 1, 6)
    agent.setSlot(randint(1, 3))
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(RIGHT, 1)
            agent.setSlot(randint(1, 3))
            agent.place(LEFT)
            agent.move(RIGHT, 1)
        }
        agent.turn(RIGHT_TURN)
    }
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.setAssist(DESTROY_OBSTACLES, false)
    agent.move(BACK, 2)
    agent.move(RIGHT, 2)
    agent.move(UP, 1)
    towersurprise()
})
player.onChat("towerseg", function (height){
    if(height <= 0)
        height = 1
    towerSegment(height*4)
})
player.onChat("towerfast", function (height) {
    towerSegment(height)
    agent.destroy(FORWARD)
    agent.move(FORWARD, 1)
    agent.destroy(UP)
    towerRoom()
})
player.onChat("towerdeco", function (height) {
    colourID = randint(0, 15)
    towerDecorativeSegment(height, colourID)
    agent.destroy(FORWARD)
    agent.move(FORWARD, 1)
    agent.destroy(UP)
    towerDecorativeRoom(colourID)
})
player.onChat("tunneldown", function (distance, width, height) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 5
    agent.setSlot(1)
    for (let index = 0; index < distance - 1; index++) {
        for (let index = 0; index < width - 1; index++) {
            blocks.fill(
                AIR,
                positions.add(
                    agent.getPosition(),
                    pos(0, 0, 0)
                ),
                positions.add(
                    agent.getPosition(),
                    pos(0, height, 0)
                ),
                FillOperation.Replace
            )
            agent.move(RIGHT, 1)
        }
        blocks.fill(
            AIR,
            positions.add(
                agent.getPosition(),
                pos(0, 0, 0)
            ),
            positions.add(
                agent.getPosition(),
                pos(0, height, 0)
            ),
            FillOperation.Replace
        )
        if (torchfrequency == 0) {
            agent.setItem(TORCH, 2, 1)
            agent.move(UP, 1)
            agent.place(RIGHT)
            agent.move(DOWN, 1)
        }
        agent.move(LEFT, width - 1)
        if (torchfrequency == 0) {
            agent.move(UP, 1)
            agent.place(LEFT)
            agent.move(DOWN, 1)
            torchfrequency = 5
        } else {
            torchfrequency += -1
        }
        agent.move(FORWARD, 1)
        agent.move(DOWN, 1)
        agent.setItem(STONE_BRICK_STAIRS, width, 1)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < width - 1; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(RIGHT, width - 1)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
    }
    agent.move(LEFT, width - 1)
    agent.setAssist(DESTROY_OBSTACLES, false)
})
let y6 = 0
let z = 0
let x5 = 0
let ddz5 = 0
let ddx = 0
let dwz = 0
let dwx = 0
let num1 = 0
let stairtype = 0
let brick4 = 0
let lightid = 0
let brick3 = 0
let brick2 = 0
let brick1 = 0
let offsetZ = 0
let offsetX = 0
let colourID = 0
let torchfrequency = 0
let list: number[] = []
let index62 = 0
let orientation = 0
player.say("" + player.name() + " has loaded Mr Pike's Coding Tools")
