/*****************************************************
 * Warhammer Quest: Blackstone Fortress – Action Dice
 * D6, D8, D12 with symbolic results (F, S, CS)
 *****************************************************/
Hooks.once("init", function() {
  const SYMBOLS = { failure: "F", success: "S", critical: "CS" };

  class ActionDie extends Die {
    constructor(termData) { super(termData); }
    getResultLabel(result) {
      if (result <= this.failureFaces) return SYMBOLS.failure;
      if (result <= this.failureFaces + this.successFaces) return SYMBOLS.success;
      return SYMBOLS.critical;
    }
  }

  class ActionD6 extends ActionDie {
    constructor(termData) { super(termData); this.faces = 6; this.failureFaces = 4; this.successFaces = 1; this.criticalFaces = 1; }
  }
  class ActionD8 extends ActionDie {
    constructor(termData) { super(termData); this.faces = 8; this.failureFaces = 4; this.successFaces = 2; this.criticalFaces = 2; }
  }
  class ActionD12 extends ActionDie {
    constructor(termData) { super(termData); this.faces = 12; this.failureFaces = 4; this.successFaces = 4; this.criticalFaces = 4; }
  }

  CONFIG.Dice.terms["A6"] = ActionD6;
  CONFIG.Dice.terms["A8"] = ActionD8;
  CONFIG.Dice.terms["A12"] = ActionD12;

  console.log("✅ Blackstone Fortress Action Dice registered: A6, A8, A12");
});
