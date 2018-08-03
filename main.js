const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")

        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })


        const targets = document.querySelectorAll(".target")

        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()

          target.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()

            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")

            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            if ((e.target.hasChildNodes() === false) || (e.target.className === "target grid origin")) {
                e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
                }
          }
        })
      }
    }
  })

  DragDropManager.init()


//   1     no nesting
//   3     only one at a time




//   2     return back to middle