// MI = ModelInterface
interface AbstractModel<MI> {
  create: () => any;
  update: (model: MI) => void;
  merge: (base: MI, source: MI) => MI;
}

abstract class Model<MI = {}> implements AbstractModel<MI> {
  /**
   *
   * @param model - a data instance matching the baseModel
   */
  constructor(model?: MI) {
    this.model = model;
  }

  // @ts-ignore
  private model?: MI;

  public abstract baseModel: MI;

  /**
   * Allows you to customize the algorithm to merge two instances of the model.
   * This is usefull if you want to do a deepmerge, or handle an array merge depending on properties.
   */
  public merge = (empty:MI, source: MI):MI => ({ ...empty, ...source });

  /**
   * Returns an instance of the model based on the baseModel and the injected instance when the class was instantiated.
   */
  // @ts-ignore
  public create = ():MI => this.merge(this.baseModel, this.model);

  /**
   * Updates the model that the instance was created with. Usefull if you want to update after saving changes to the instance.
   */

  public update = (model:MI) => {
    this.model = model;
    return this.create();
  };
}

export default Model;
