
let Heffalumps = {}
let Eeyore = {}
let Kanga = {}
let ChristopherRobin = {}
let Rabbit = {}
let Gopher = {}
let Bees = {}
let WinnieThePooh = {}
let Tigger = {}
let Piglet = {}
let Owl = {}

Heffalumps.north = null
Heffalumps.south = null
Heffalumps.west = Eeyore
Heffalumps.east = null

Eeyore.north = null
Eeyore.south = Kanga
Eeyore.west = null
Eeyore.east = Heffalumps

Kanga.north = Eeyore
Kanga.south = ChristopherRobin
Kanga.west = null
Kanga.east = null

ChristopherRobin.north = Kanga
ChristopherRobin.south = WinnieThePooh
ChristopherRobin.west = Owl
ChristopherRobin.east = Rabbit

Rabbit.north = null
Rabbit.south = Bees
Rabbit.west = ChristopherRobin
Rabbit.east = Gopher

Gopher.north = null
Gopher.south = null
Gopher.west = Rabbit
Gopher.east = null

Bees.north = Rabbit
Bees.south = null
Bees.west = WinnieThePooh
Bees.east = null

WinnieThePooh.north = Kanga
WinnieThePooh.south = Tigger
WinnieThePooh.west = Piglet
WinnieThePooh.east = Bees

Tigger.north = WinnieThePooh
Tigger.south = null
Tigger.west = null
Tigger.east = null

Piglet.north = Owl
Piglet.south = null
Piglet.west = null
Piglet.east = WinnieThePooh

Owl.north = null
Owl.south = Piglet
Owl.west = null
Owl.east = ChristopherRobin



console.log(Tigger)