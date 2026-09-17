player.onChat("towerroom", function () {
    towerRoom()
})
// Agent Controls
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
        for (let index5 = 0; index5 <= 2; index5++) {
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.turn(LEFT_TURN)
        for (let index6 = 0; index6 <= 3; index6++) {
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
            blocks.blockWithData(BED, colourID),
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
        agent.move(FORWARD, 1)
        agent.move(RIGHT, 1)
        agent.move(UP, 1)
        agent.setItem(CHAIN, 1, 8)
        agent.place(UP)
        agent.move(DOWN, 1)
        agent.setItem(BELL, 1, 8)
        agent.place(UP)
        agent.move(LEFT, 1)
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
// Tunnel Building
function tunnelSegment(distance: number, width: number, height: number) {
    let error3 = 0
    return error3
}

// Bridge Building
player.onChat("bridge", function (segmentSize, segmentCount, wPadding) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 0
    for (let segment = 0; segment < segmentCount; segment++) {
        bridgeSegment(segmentSize, wPadding)
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
})

function bridgeSegment(segmentSize: number, wPadding: number) {
    for (let index = 0; index < segmentSize; index++) {
        agent.move(FORWARD, 1)
        agent.move(LEFT, wPadding)
        agent.setItem(STONE_BRICKS, 1 + (wPadding * 2), 1)
        for (let w = -wPadding; w <= wPadding; w++) {
            if (index < segmentSize - 1) {
                // Normal Floor
                agent.setSlot(1)
                agent.place(DOWN)
                if (w == -wPadding) {
                    // Left fence
                    agent.setItem(139, 2, 2)
                    agent.setSlot(2)
                    agent.turn(LEFT)
                    agent.move(BACK, 1)
                    agent.place(FORWARD)
                    agent.turn(RIGHT)
                } else if (w == wPadding) {
                    // Right fence
                    agent.setItem(139, 2, 2)
                    agent.setSlot(2)
                    agent.turn(RIGHT)
                    agent.move(BACK, 1)
                    agent.place(FORWARD)
                    agent.turn(LEFT)
                } else if (w < wPadding) {
                    // Readjust position if not already moved during fence placement
                    agent.move(RIGHT, 1)
                }
            } else { // Add torches and bridge supports at end of segment
                if (w == -wPadding || w == wPadding) {
                    // Either side wall
                    let agentPos = agent.getPosition()
                    agent.move(UP, 1)
                    let groundPos = positions.groundPosition(agentPos)
                    blocks.fill(
                        CHISELED_STONE_BRICKS,
                        agentPos,
                        groundPos,
                        FillOperation.Replace
                    )
                    agent.setItem(TORCH, 2, 2)
                    agent.setSlot(2)
                    if (w == -wPadding) {
                        // Left Side
                        agent.move(RIGHT, 1)
                        agent.place(LEFT)
                        agent.move(DOWN, 1)
                    } else {
                        // Right Side
                        agent.move(LEFT, 1)
                        agent.place(RIGHT)
                        agent.move(DOWN, 1)
                    }
                } else {
                    // Normal Floor
                    agent.setSlot(1)
                    agent.place(DOWN)
                    if (w < wPadding) {
                        // Readjust position if not already moved during fence placement
                        agent.move(RIGHT, 1)
                    }
                }
            }
        }
        agent.move(LEFT, wPadding - 1)
    }
}

// Castle Wall Building
player.onChat("simplewall", function (segmentSize, segmentCount, wPadding) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let segment = 0; segment < segmentCount; segment++) {
        wallSegment(segmentSize, wPadding)
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
})

player.onChat("castlewallRHS", function (distance: number, wPadding: number, targetHeight: number) {
    startCastleWall(true, distance, wPadding, targetHeight)
})

player.onChat("castlewallLHS", function (distance: number, wPadding: number, targetHeight: number) {
    startCastleWall(false, distance, wPadding, targetHeight)
})

function startCastleWall(RHS: boolean, distance: number, wPadding: number, targetHeight: number) {
    let currentHeight = agent.getPosition().getValue(Axis.Y)
    let currentPos = 0
    agent.setAssist(DESTROY_OBSTACLES, true)

    // Build steps until we reach our goal height or run out of wall length
    let crenelation = currentPos % 2 > 0 // Make sure we end on crenelation
    while (currentPos < distance && currentHeight < targetHeight) {
        currentHeight++
        let isFullHeight = false
        let nextIsFullHeight = false
        agent.move(FORWARD, 1)
        agent.move(LEFT, wPadding)
        agent.setItem(STONE_BRICKS, 1 + (wPadding * 2), 1)
        agent.setItem(COBBLESTONE_STAIRS, 1 + (wPadding * 2), 3)

        // FIRST PASS, building floor\support
        agent.setSlot(1)
        for (let w = -wPadding; w <= wPadding; w++) {
            // Normal Floor on walkway, ignore walls on first pass
            if (w > -wPadding && w < wPadding) { // Place supporting floor first so we can have rooms underneath
                agent.place(DOWN)
            }

            if (w < wPadding) {
                agent.move(RIGHT, 1)
            }
        }
        agent.move(LEFT, wPadding * 2)

        // SECOND PASS, build walls and steps
        if (!RHS) {
            agent.move(UP, (targetHeight - currentHeight))
        }
        for (let w = -wPadding; w <= wPadding; w++) {
            // Switch from high to low or low to high
            if (w == 0) {
                if (RHS) {
                    while (agent.getPosition().getValue(Axis.Y) < targetHeight) {
                        agent.move(UP, 1)
                    }
                } else {
                    while (agent.getPosition().getValue(Axis.Y) > currentHeight) {
                        agent.move(DOWN, 1)
                    }
                }
            }

            // Place walls
            if (w == -wPadding || w == wPadding) {
                let wallOffset = 0;
                if ((RHS && w == wPadding) || (!RHS && w == -wPadding)) {
                    wallOffset++;
                    if (crenelation) {
                        wallOffset++;
                    }
                } else if ((RHS && w == -wPadding) || (!RHS && w == wPadding)) {
                    wallOffset--;
                }
                agent.move(UP, wallOffset)

                let agentPos = agent.getPosition()
                agent.move(UP, 1) // Move above wall position 
                let groundPos = positions.groundPosition(agentPos)
                blocks.fill(
                    CHISELED_STONE_BRICKS,
                    agentPos,
                    groundPos,
                    FillOperation.Replace
                )
                // Only put crenelation on walls
                if (crenelation && (w == -wPadding || w == wPadding)) {
                    agent.setItem(TORCH, 2, 2)
                    agent.setSlot(2)
                }
                if (w == -wPadding) {
                    // Left Side
                    agent.move(RIGHT, 1)
                    if (crenelation) {
                        agent.place(LEFT)
                    }
                } else if (w == wPadding) {
                    // Right Side
                    agent.move(LEFT, 1)
                    if (crenelation) {
                        agent.place(RIGHT)
                    }
                }
                if (wallOffset > 0) {
                    agent.move(DOWN, wallOffset)
                }
            } else if (w > -wPadding && w < wPadding) {
                // Build thick floor\wall
                if ((!RHS && w < 0) || RHS && w > 0) {
                    agent.move(DOWN, 1)
                    let agentPos = agent.getPosition()
                    agent.move(UP, 1)
                    let groundPos = positions.groundPosition(agentPos)
                    blocks.fill(
                        CHISELED_STONE_BRICKS,
                        agentPos,
                        groundPos,
                        FillOperation.Replace
                    )
                } else {
                    // Place steps
                    agent.setSlot(3)
                    agent.place(DOWN)
                }
                if (w < wPadding) {
                    agent.move(RIGHT, 1)
                }
            }
        }

        // Reset to start again, but one level higher
        agent.move(LEFT, wPadding - 1)
        if (currentHeight < targetHeight) {
            currentHeight = agent.getPosition().getValue(Axis.Y)
        }
        crenelation = !crenelation
        currentPos++
    }

    // Finish the wall
    while (currentPos < distance) {
        let remainder = currentPos % 8
        if (remainder > 0) {
            // Finish the current segment at full height
            wallSegment(8 - remainder, wPadding)
            currentPos += remainder
        } else {
            // Make a whole segment
            wallSegment(8, wPadding)
            currentPos += 8
        }
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
}

function wallSegment(segmentSize: number, wPadding: number) {
    let crenelation = segmentSize % 2 > 0 // Make sure we end on crenelation
    for (let index = 0; index < segmentSize; index++) {
        agent.move(FORWARD, 1)
        agent.move(LEFT, wPadding)
        agent.setItem(STONE_BRICKS, 1 + (wPadding * 2), 1)
        for (let w = -wPadding; w <= wPadding; w++) {
            if (w == -wPadding || w == wPadding) {
                // Either side wall
                if (crenelation) {
                    agent.move(UP, 1) // Extra height on wall
                }
                let agentPos = agent.getPosition()
                agent.move(UP, 1) // Move above wall position
                let groundPos = positions.groundPosition(agentPos)
                blocks.fill(
                    CHISELED_STONE_BRICKS,
                    agentPos,
                    groundPos,
                    FillOperation.Replace
                )
                if (crenelation) {
                    agent.setItem(TORCH, 2, 2)
                    agent.setSlot(2)
                }
                if (w == -wPadding) {
                    // Left Side
                    agent.move(RIGHT, 1)
                    if (crenelation) {
                        agent.place(LEFT)
                        agent.move(DOWN, 1)
                    }
                } else {
                    // Right Side
                    agent.move(LEFT, 1)
                    if (crenelation) {
                        agent.place(RIGHT)
                        agent.move(DOWN, 1)
                    }
                }
                agent.move(DOWN, 1)
            } else {
                // Normal Floor
                agent.setSlot(1)
                agent.place(DOWN)
                if (w < wPadding) {
                    // Readjust position if not already moved during fence placement
                    agent.move(RIGHT, 1)
                }
            }
        }
        agent.move(LEFT, wPadding - 1)
        crenelation = !crenelation
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
// Legacy Agent Code
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
    for (let index4 = 0; index4 <= 2; index4++) {
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
    for (let index = 0; index < 4; index++) {
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
player.onChat("square", function (width) {
    blocks.fill(
        STONE_BRICKS,
        pos(width / -0.5, 0, width / -0.5),
        pos(width / 2, 0, width / 2),
        FillOperation.Replace
    )
})
// Colour Functions
function GetGlassColour(colourID: number) {
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
    for (let y3 = 0; y3 <= height; y3++) {
        if (y3 < height) {
            for (let x = 0; x <= radius; x++) {
                for (let ddz = 0; ddz <= radius; ddz++) {
                    if (x * ddz + x * ddz < radius * radius) {
                        blocks.place(block, pos(x * 1, y3 + ypos, ddz * 1))
                        blocks.place(block, pos(x * 1, y3 + ypos, ddz * -1))
                        blocks.place(block, pos(x * -1, y3 + ypos, ddz * -1))
                        blocks.place(block, pos(x * -1, y3 + ypos, ddz * 1))
                    }
                }
            }
        }
    }
}
player.onChat("towerdeco", function (height) {
    colourID = randint(0, 15)
    towerDecorativeSegment(height, colourID)
    agent.destroy(FORWARD)
    agent.move(FORWARD, 1)
    agent.destroy(UP)
    towerDecorativeRoom(colourID)
})
function towerRoom() {
    towerDecorativeRoom(randint(0, 15))
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
player.onChat("clonecircle", function (radius, height, offsetY) {
    for (let y22 = 0; y22 <= height; y22++) {
        if (y22 < height) {
            for (let x2 = 0; x2 <= radius; x2++) {
                for (let ddz2 = 0; ddz2 <= radius; ddz2++) {
                    if (x2 * ddz2 + x2 * ddz2 < radius * radius) {
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * 1, y22 + offsetY, ddz2 * 1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * 1, y22 + offsetY, ddz2 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * -1, y22 + offsetY, ddz2 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x2 * -1, y22 + offsetY, ddz2 * 1))
                    }
                }
            }
        }
    }
})
function tunnelUp(distance: number, width: number, height: number) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 8
    agent.setSlot(1)
    for (let index10 = 0; index10 < distance; index10++ && !error5) {
        for (let index11 = 0; index11 < width - 1; index11++) {
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
            error5 = blocks.testForBlock(AIR, positions.add(agent.getPosition(), pos(0, -1, 0)))
                || blocks.testForBlock(WATER, positions.add(agent.getPosition(), pos(0, -1, 0)))
                || blocks.testForBlock(LAVA, positions.add(agent.getPosition(), pos(0, -1, 0)))
            if (error5) return error5;
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
        for (let index12 = 0; index12 < width - 1; index12++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(LEFT, width - 1)
    }
    agent.setAssist(DESTROY_OBSTACLES, false)
    return error5
}
player.onChat("towerseg", function (height) {
    if (height <= 0) {
        height = 1
    }
    towerSegment(height * 4)
})
player.onChat("autoladder", function () {
    while (agent.detect(AgentDetection.Block, FORWARD) && !(agent.detect(AgentDetection.Block, UP))) {
        agent.setItem(LADDER, 1, 1)
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
})
player.onChat("moveagent", function (forward, upward, rightward) {
    agent.move(FORWARD, forward)
    agent.move(UP, upward)
    agent.move(RIGHT, rightward)
})
player.onChat("agentorientation", function () {
    player.say(agent.getOrientation())
})
player.onChat("tunnelup", function (distance, width, height) {
    tunnelUp(distance, width, height)
})
player.onChat("glasscircle", function (radius, h, y) {
    circle(radius, h, GLASS, y)
})
function tunnelDown(distance: number, width: number, height: number) {
    agent.setAssist(DESTROY_OBSTACLES, true)
    torchfrequency = 8
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
            error4 = blocks.testForBlock(AIR, positions.add(
                agent.getPosition(),
                pos(0, -1, 0)
            )) || blocks.testForBlock(WATER, positions.add(
                agent.getPosition(),
                pos(0, -1, 0)
            )) || blocks.testForBlock(LAVA, positions.add(
                agent.getPosition(),
                pos(0, -1, 0)
            ))
            if (error4) {
                return error4
            }
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
    return error4
}
player.onChat("fillcircle", function (radius, h, y) {
    circle(radius, h, POLISHED_ANDESITE, y)
})
player.onChat("clonecylinder", function (radius, height, offsetY) {
    for (let y32 = 0; y32 <= height; y32++) {
        if (y32 < height) {
            for (let x3 = 0; x3 <= radius; x3++) {
                for (let ddz3 = 0; ddz3 <= radius; ddz3++) {
                    if (x3 * ddz3 + x3 * ddz3 >= (radius - 1) * (radius - 1) && x3 * ddz3 + x3 * ddz3 <= radius * radius) {
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * 1, y32 + offsetY, ddz3 * 1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * 1, y32 + offsetY, ddz3 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * -1, y32 + offsetY, ddz3 * -1))
                        blocks.place(agent.inspect(AgentInspection.Block, DOWN), pos(x3 * -1, y32 + offsetY, ddz3 * 1))
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
    for (let y2 = 0; y2 <= floors - 3; y2++) {
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
                agent.setItem(blocks.blockWithData(GetPaneColour(colourID), colourID), 1, 4)
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
// Tower building
player.onChat("towerfast", function (height) {
    towerSegment(height)
    agent.destroy(FORWARD)
    agent.move(FORWARD, 1)
    agent.destroy(UP)
    towerRoom()
})
player.onChat("tunneldown", function (distance, width, height) {
    tunnelDown(distance, width, height)
})
let error = 0
let z = 0
let x5 = 0
let ddz5 = 0
let ddx = 0
let dwz = 0
let dwx = 0
let r1 = 0
let error4 = false
let offsetZ = 0
let offsetX = 0
let orientation = 0
let list: number[] = []
let index62 = 0
let torchfrequency = 0
let colourID = 0
let brick1 = 0
let brick2 = 0
let brick3 = 0
let lightid = 0
let brick4 = 0
let stairtype = 0
let num1 = 0
let y6 = 0
let error5 = false
let error2 = false
player.say("" + player.name() + " has loaded Mr Pike's Coding Tools")
