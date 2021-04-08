export class Incident {
  constructor(
    public _id?: string,
    public number?: string,
    public address?: string,
    public description?: string,
    public priority?: string,
    public status?: string,
    public customerInfo?: string,
    public narrative?: string,
    public resolution?: string,
    public createDate?: Date
  ) {}
}
