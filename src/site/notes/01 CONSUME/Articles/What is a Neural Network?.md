---
{"dg-publish":true,"permalink":"/01-consume/articles/what-is-a-neural-network/","title":"What is a Neural Network? - GeeksforGeeks","tags":["ai","neural-networks","machine-learning","deeper-learning"]}
---


# What is a Neural Network?

## Key Points:
Neural networks are machine learning models that mimic the complex functions of the human brain. These models consist of interconnected nodes or neurons that process data, learn patterns, and enable tasks such as pattern recognition and decision-making.

*****In this article, we will explore the fundamentals of neural networks, their architecture, how they work, and their applications in various fields. Understanding neural networks is essential for anyone interested in the advancements of artificial intelligence.*****

## Understanding Neural Networks in Deep Learning

Neural networks are capable of learning and identifying patterns directly from data without pre-defined rules. These networks are built from several key components:

1. ****Neurons****: The basic units that receive inputs, each neuron is governed by a threshold and an activation function.
2. ****Connections****: Links between neurons that carry information, regulated by weights and biases.
3. ****Weights and Biases****: These parameters determine the strength and influence of connections.
4. ****Propagation Functions****: Mechanisms that help process and transfer data across layers of neurons.
5. ****Learning Rule****: The method that adjusts weights and biases over time to improve accuracy.

****Learning in neural networks follows a structured, three-stage process:****

1. ****Input Computation****: Data is fed into the network.
2. ****Output Generation****: Based on the current parameters, the network generates an output.
3. ****Iterative Refinement****: The network refines its output by adjusting weights and biases, gradually improving its performance on diverse tasks.

****In an adaptive learning environment:****

- The neural network is exposed to a simulated scenario or dataset.
- Parameters such as weights and biases are updated in response to new data or conditions.
- With each adjustment, the network’s response evolves, allowing it to adapt effectively to different tasks or environments.

![Artificial-Neural-Networks.webp](/img/user/04%20META/Assets/Artificial-Neural-Networks.webp)

The image illustrates the analogy between a biological neuron and an artificial neuron, showing how inputs are received and processed to produce outputs in both systems.

## ****Importance of Neural Networks****

Neural networks are pivotal in identifying complex patterns, solving intricate challenges, and adapting to dynamic environments. Their ability to learn from vast amounts of data is transformative, impacting technologies like ****natural language processing****, ****self-driving vehicles****, and ****automated decision-making****.

Neural networks streamline processes, increase efficiency, and support decision-making across various industries. As a backbone of artificial intelligence, they continue to drive innovation, shaping the future of technology.

## ****Evolution of Neural Networks****

Neural networks have undergone significant evolution since their inception in the mid-20th century. Here’s a concise timeline of the major developments in the field:

- ****1940s-1950s****: The concept of neural networks began with McCulloch and Pitts’ introduction of the first mathematical model for ****artificial neurons****. However, the lack of computational power during that time posed significant challenges to further advancements.

- ****1960s-1970s****: Frank Rosenblatt’s worked on perceptrons. [****Perceptrons****](https://www.geeksforgeeks.org/what-is-perceptron-the-simplest-artificial-neural-network/) are simple single-layer networks that can solve linearly separable problems, but can not perform complex tasks.

- ****1980s:**** The development of ****backpropagation**** by Rumelhart, Hinton, and Williams revolutionized neural networks by enabling the training of multi-layer networks. This period also saw the rise of connectionism, emphasizing learning through interconnected nodes.

- ****1990s:**** Neural networks experienced a surge in popularity with applications across image recognition, finance, and more. However, this growth was tempered by a period known as the ****“AI winter,”**** during which high computational costs and unrealistic expectations dampened progress.

- ****2000s:**** A resurgence was triggered by the availability of larger datasets, advances in computational power, and innovative network architectures. Deep learning, utilizing multiple layers, proved highly effective across various domains.

- ****2010s-Present:**** The landscape of machine learning has been dominated by deep learning models such as ****convolutional neural networks (CNNs)**** and ****recurrent neural networks (RNNs)****.

## Layers in Neural Network Architecture

1. ****Input Layer:**** This is where the network receives its input data. Each input neuron in the layer corresponds to a feature in the input data.
2. ****Hidden Layers:**** These layers perform most of the computational heavy lifting. A neural network can have one or multiple hidden layers. Each layer consists of units (neurons) that transform the inputs into something that the output layer can use.
3. ****Output Layer:**** The final layer produces the output of the model. The format of these outputs varies depending on the specific task (e.g., classification, regression).

![nn-ar-Geeksforgeeks](https://media.geeksforgeeks.org/wp-content/uploads/20231204175521/nn-ar.jpg)

## Working of Neural Networks

### Forward Propagation

When data is input into the network, it passes through the network in the forward direction, from the input layer through the hidden layers to the output layer. This process is known as forward propagation. Here’s what happens during this phase:

1. ****Linear Transformation:**** Each neuron in a layer receives inputs, which are multiplied by the weights associated with the connections. These products are summed together, and a bias is added to the sum. This can be represented mathematically as: 
$$
z = w_1x_1 + w_2x_2 + \ldots + w_nx_n + b
$$
 where 
$$
w
$$
 represents the weights, 
$$
x
$$
 represents the inputs, and 
$$
b
$$
 is the bias.
2. ****Activation:**** The result of the linear transformation (denoted as 
$$
z
$$
) is then passed through an activation function. The activation function is crucial because it introduces non-linearity into the system, enabling the network to learn more complex patterns. Popular activation functions include ReLU, sigmoid, and tanh.

### Backpropagation

After forward propagation, the network evaluates its performance using a loss function, which measures the difference between the actual output and the predicted output. The goal of training is to minimize this loss. This is where backpropagation comes into play:

1. ****Loss Calculation:**** The network calculates the loss, which provides a measure of error in the predictions. The loss function could vary; common choices are mean squared error for regression tasks or cross-entropy loss for classification.
2. ****Gradient Calculation:**** The network computes the gradients of the loss function with respect to each weight and bias in the network. This involves applying the chain rule of calculus to find out how much each part of the output error can be attributed to each weight and bias.
3. ****Weight Update:**** Once the gradients are calculated, the weights and biases are updated using an optimization algorithm like stochastic gradient descent (SGD). The weights are adjusted in the opposite direction of the gradient to minimize the loss. The size of the step taken in each update is determined by the learning rate.

### Iteration

This process of forward propagation, loss calculation, backpropagation, and weight update is repeated for many iterations over the dataset. Over time, this iterative process reduces the loss, and the network’s predictions become more accurate.

Through these steps, neural networks can adapt their parameters to better approximate the relationships in the data, thereby improving their performance on tasks such as classification, regression, or any other predictive modeling.

### Example of Email Classification

Let’s consider a record of an email dataset:

| Email ID | Email Content | Sender | Subject Line | Label |
| --- | --- | --- | --- | --- |
| 1 | “Get free gift cards now!” | spam@example.com | “Exclusive Offer” | 1 |

To classify this email, we will create a feature vector based on the analysis of keywords such as “free,” “win,” and “offer.”

The feature vector of the record can be presented as:

- “free”: Present (1)
- “win”: Absent (0)
- “offer”: Present (1)

| Email ID | Email Content | Sender | Subject Line | Feature Vector | Label |
| --- | --- | --- | --- | --- | --- |
| 1 | “Get free gift cards now!” | spam@example.com | “Exclusive Offer” | \[1, 0, 1\] | 1 |

Now, let’s delve into the working:

****1\. Input Layer:**** The input layer contains 3 nodes that indicates the presence of each keyword.

****2\. Hidden Layer****

- The input data is passed through one or more hidden layers.
- Each neuron in the hidden layer performs the following operations:
1. ****Weighted Sum****: Each input is multiplied by a corresponding weight assigned to the connection. For example, if the weights from the input layer to the hidden layer neurons are as follows:
- Weights for Neuron H1: `[0.5, -0.2, 0.3]`
- Weights for Neuron H2: `[0.4, 0.1, -0.5]`
2. ****Calculate Weighted Input****:
- For Neuron H1:
- $$
\text{Calculation}=(1 \times 0.5) + (0 \times -0.2) + (1 \times 0.3) = 0.5 + 0 + 0.3 = 0.8
$$
- For Neuron H2:
- $$
\text{Calculation} = (1×0.4)+(0×0.1)+(1×−0.5)=0.4+0−0.5=−0.1
$$
3. ****Activation Function****: The result is passed through an activation function (e.g., ReLU or sigmoid) to introduce non-linearity.
- For H1, applying ReLU: 
$$
\text{ReLU}(0.8) = 0.8
$$
- For H2, applying ReLU: 
$$
\text{ReLU}(-0.1) = 0
$$

#### 3\. Output Layer

- The activated outputs from the hidden layer are passed to the output neuron.
- The output neuron receives the values from the hidden layer neurons and computes the final prediction using weights:
- Suppose the output weights from hidden layer to output neuron are `[0.7, 0.2]`.
- Calculation:
- $$
\text{Input}=(0.8 \times 0.7) + (0 \times 0.2) = 0.56 + 0 = 0.56
$$
- ****Final Activation****: The output is passed through a sigmoid activation function to obtain a probability:
- $$
\sigma(0.56) \approx 0.636
$$

#### 4\. Final Classification

- The output value of approximately ****0.636**** indicates the probability of the email being spam.
- Since this value is greater than 0.5, the neural network classifies the email as spam (1).

![Neural-Network](https://media.geeksforgeeks.org/wp-content/uploads/20241106184728862313/Neural-Network.png)

Neural Network for Email Classification Example

## Learning of a Neural Network

### ****1\. Learning with Supervised Learning****

In supervised learning, a neural network learns from labeled input-output pairs provided by a teacher. The network generates outputs based on inputs, and by comparing these outputs to the known desired outputs, an error signal is created. The network iteratively adjusts its parameters to minimize errors until it reaches an acceptable performance level.

### ****2\. Learning with Unsupervised Learning****

Unsupervised learning involves data without labeled output variables. The primary goal is to understand the underlying structure of the input data (X). Unlike supervised learning, there is no instructor to guide the process. Instead, the focus is on modeling data patterns and relationships, with techniques like clustering and association commonly used.

### ****3\. Learning with Reinforcement Learning****

Reinforcement learning enables a neural network to learn through interaction with its environment. The network receives feedback in the form of rewards or penalties, guiding it to find an optimal policy or strategy that maximizes cumulative rewards over time. This approach is widely used in applications like gaming and decision-making.

## Types of Neural Networks

There are **seven** types of neural networks that can be used.

- [****Feedforward Networks****](https://www.geeksforgeeks.org/feedforward-neural-network/)****:**** A feedforward neural network is a simple artificial neural network architecture in which data moves from input to output in a single direction.
- [****Multilayer Perceptron (MLP)****](https://www.geeksforgeeks.org/multi-layer-perceptron-learning-in-tensorflow/)****:**** MLP is a type of feedforward neural network with three or more layers, including an input layer, one or more hidden layers, and an output layer. It uses nonlinear activation functions.
- [****Convolutional Neural Network (CNN)****](https://www.geeksforgeeks.org/introduction-convolution-neural-network/)****:**** A Convolutional Neural Network (CNN) is a specialized artificial neural network designed for image processing. It employs convolutional layers to automatically learn hierarchical features from input images, enabling effective image recognition and classification.
- [****Recurrent Neural Network (RNN)****](https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/)****:**** An artificial neural network type intended for sequential data processing is called a Recurrent Neural Network (RNN). It is appropriate for applications where contextual dependencies are critical, such as time series prediction and natural language processing, since it makes use of feedback loops, which enable information to survive within the network.
- [****Long Short-Term Memory (LSTM)****](https://www.geeksforgeeks.org/deep-learning-introduction-to-long-short-term-memory/)****:**** LSTM is a type of RNN that is designed to overcome the vanishing gradient problem in training RNNs. It uses memory cells and gates to selectively read, write, and erase information.

## Implementation of Neural Network using TensorFlow

Here, we implement simple feedforward neural network that trains on a sample dataset and makes predictions using following steps:

### Step 1: Import Necessary Libraries

Import necessary libraries, primarily TensorFlow and Keras, along with other required packages such as NumPy and Pandas for data handling.

```
import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
```

### Step 2: Create and Load Dataset

- Create or load a dataset. Convert the data into a format suitable for training (usually NumPy arrays).
- Define features (X) and labels (y).

```
data = {
    'feature1': [0.1, 0.2, 0.3, 0.4, 0.5],
    'feature2': [0.5, 0.4, 0.3, 0.2, 0.1],
    'label': [0, 0, 1, 1, 1]
}
df = pd.DataFrame(data)
X = df[['feature1', 'feature2']].values
y = df['label'].values
```

### Step 3: Create a Neural Network

Instantiate a Sequential model and add layers. The input layer and hidden layers are typically created using `Dense` layers, specifying the number of neurons and activation functions.

```
model = Sequential()
model.add(Dense(8, input_dim=2, activation='relu'))  # Hidden layer
model.add(Dense(1, activation='sigmoid'))  # Output layer
```

### ****Step 4: Compile the Model****

Compile the model by specifying the loss function, optimizer, and metrics to evaluate during training.

```
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
```

### ****Step 5: Train the Model****

Fit the model on the training data, specifying the number of epochs and batch size. This step trains the neural network to learn from the input data.

```
model.fit(X, y, epochs=100, batch_size=1, verbose=1)
```

### ****Step 5: Make Predictions****

Use the trained model to make predictions on new data. Process the output to interpret the predictions (e.g., convert probabilities to binary outcomes).

```
test_data = np.array([[0.2, 0.4]])
prediction = model.predict(test_data)
predicted_label = (prediction > 0.5).astype(int)
```

### Complete Code

`   ```python3 import numpy as np import pandas as pd from tensorflow.keras.models import Sequential from tensorflow.keras.layers import Dense  # Sample dataset (binary classification) data = {     'feature1': [0.1, 0.2, 0.3, 0.4, 0.5],     'feature2': [0.5, 0.4, 0.3, 0.2, 0.1],     'label': [0, 0, 1, 1, 1]  # Binary labels }  # Convert to DataFrame df = pd.DataFrame(data)  # Features (X) and Labels (y) X = df[['feature1', 'feature2']].values  # Input features y = df['label'].values  # Output labels  # Create a Sequential model model = Sequential()  # Add input layer and hidden layer model.add(Dense(8, input_dim=2, activation='relu'))  # 2 input features, 8 neurons in hidden layer  # Add output layer model.add(Dense(1, activation='sigmoid'))  # Output layer for binary classification  # Compile the model model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])  # Train the model model.fit(X, y, epochs=100, batch_size=1, verbose=1)  # Example input for prediction test_data = np.array([[0.2, 0.4]])  # New input data  # Make a prediction prediction = model.predict(test_data) predicted_label = (prediction > 0.5).astype(int)  # Convert probability to binary output print(f"Predicted label: {predicted_label[0][0]}") ```    `

****Output:****

```
Predicted label: 1
```

## Advantages of Neural Networks

Neural networks are widely used in many different applications because of their many benefits:

- ****Adaptability:**** Neural networks are useful for activities where the link between inputs and outputs is complex or not well defined because they can adapt to new situations and learn from data.
- ****Pattern Recognition:**** Their proficiency in pattern recognition renders them efficacious in tasks like as audio and image identification, natural language processing, and other intricate data patterns.
- ****Parallel Processing:**** Because neural networks are capable of parallel processing by nature, they can process numerous jobs at once, which speeds up and improves the efficiency of computations.
- ****Non-Linearity:**** Neural networks are able to model and comprehend complicated relationships in data by virtue of the non-linear activation functions found in neurons, which overcome the drawbacks of linear models.

## Disadvantages of Neural Networks

Neural networks, while powerful, are not without drawbacks and difficulties:

- ****Computational Intensity:**** Large neural network training can be a laborious and computationally demanding process that demands a lot of computing power.
- ****Black box Nature:**** As “black box” models, neural networks pose a problem in important applications since it is difficult to understand how they make decisions.
- ****Overfitting:**** Overfitting is a phenomenon in which neural networks commit training material to memory rather than identifying patterns in the data. Although regularization approaches help to alleviate this, the problem still exists.
- ****Need for Large datasets:**** For efficient training, neural networks frequently need sizable, labeled datasets; otherwise, their performance may suffer from incomplete or skewed data.

## Applications of Neural Networks

Neural networks have numerous applications across various fields:

1. ****Image and Video Recognition****: CNNs are extensively used in applications such as facial recognition, autonomous driving, and medical image analysis.
2. ****Natural Language Processing (NLP)****: RNNs and transformers power language translation, chatbots, and sentiment analysis.
3. ****Finance****: Predicting stock prices, fraud detection, and risk management.
4. ****Healthcare****: Neural networks assist in diagnosing diseases, analyzing medical images, and personalizing treatment plans.
5. ****Gaming and Autonomous Systems****: Neural networks enable real-time decision-making, enhancing user experience in video games and enabling autonomous systems like self-driving cars.

## Frequently Asked Questions (FAQs)

### ****What is a neural network?****

> A neural network is an artificial system made of interconnected nodes (neurons) that process information, modeled after the structure of the human brain. It is employed in machine learning jobs where patterns are extracted from data.

### ****How does a neural network work?****

> Layers of connected neurons process data in neural networks. The network processes input data, modifies weights during training, and produces an output depending on patterns that it has discovered.

### ****What are the common types of neural network architectures?****

> Feedforward neural networks, recurrent neural networks (RNNs), convolutional neural networks (CNNs), and long short-term memory networks (LSTMs) are examples of common architectures that are each designed for a certain task.

### ****What is the difference between supervised and unsupervised learning in neural networks?****

> In supervised learning, labeled data is used to train a neural network so that it may learn to map inputs to matching outputs. Unsupervised learning works with unlabeled data and looks for structures or patterns in the data****.****

### ****How do neural networks handle sequential data?****

> The feedback loops that recurrent neural networks (RNNs) incorporate allow them to process sequential data and, over time, capture dependencies and context.

## Summary:
Neural networks are machine learning models that simulate the human brain's functions, enabling pattern recognition and decision-making through interconnected neurons, and have diverse applications across fields such as image recognition, natural language processing, and autonomous systems.

---

*Source: [What is a Neural Network? - GeeksforGeeks](https://www.geeksforgeeks.org/neural-networks-a-beginners-guide/)*
