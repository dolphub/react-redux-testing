import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>
                <TextInput
                    name="title"
                    label="Title"
                    value={course.title}
                    onChange={onChange}
                    error={errors.title} />
                <SelectInput
                    name="authorId"
                    label="Author"
                    value={course.authorId}
                    defaultOption="Select Author"
                    options={allAuthors}
                    error={errors.authorId} />
                <TextInput
                    name="category"
                    label="Category"
                    value={course.category}
                    onChange={onChange}
                    error={errors.category} />
                <TextInput
                    name="length"
                    label="Length"
                    value={course.length}
                    onChange={onChange}
                    error={errors.length} />
                <input
                    type="submit"
                    disable={loading}
                    values={loading ? "Saving..." : "Save"}
                    className="btn btn-primary"
                    onClick={onSave}/>
            </h1>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;
