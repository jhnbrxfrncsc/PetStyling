import Schema from '../model/appModel.js';

export const app_index = async (req, res) => {
    try {
        const data = await Schema.find().sort({ createdAt: -1 });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const app_create = async (req, res) => {
    const clientData = new Schema(req.body);
    try {
        const newData = await clientData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const app_search = async (req, res) => {
    try {
        const result = await Schema.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const app_delete = async (req, res) => {
    try {
        const result = await Schema.findByIdAndDelete(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}